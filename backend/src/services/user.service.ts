import {PrismaClient} from '@prisma/client';
import valkey from '../lib/valkey.js'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

const prisma = new PrismaClient();
const USER_CACHE_PREFIX = "user:";

// Create a new user
export const createUserService = async(name : string ,email:string,is_active:boolean)=> {

    const newUser = await prisma.user.create({
      data: { name, email, is_active }
    });
    
   // clearing the "all users" list cache since a new user was added...

    await valkey.del("users:all");
    console.log(`-------⚡ Cache Cleared: New user added, invalidating users:all cache--------`);

    return newUser;
}

// get all users
export const getUserDataService = async()=> {

    //first let's check it is cached or not..
    const cached = await valkey.get("users:all");

    if(cached) {
       console.log(`-------⚡ Cache Hit: Fetching all users from Valkey--------`);

       return JSON.parse(cached)
    }
     
    // If not in cache, fetch from DB table
    const users = await prisma.user.findMany();

    //store in our cache  (2hrs = 7200secs know)
    await valkey.set("users:all",JSON.stringify(users),"EX",7200)

    return users;
}


//get user by id
export const getUserByIdService = async(id:number)=> {

    const cacheKey = `${USER_CACHE_PREFIX}${id}`;
      // Check individual user cache first
    const cachedUser = await valkey.get(cacheKey);

    if (cachedUser) {
        console.log(`-------⚡ Cache Hit: Fetching user ${id} from Valkey--------`);
        return JSON.parse(cachedUser);
  }
  
     
    const currUser = await prisma.user.findUnique({where :{ id } });

    if(currUser) {

        await valkey.set(cacheKey,JSON.stringify(currUser),"EX",7200)
        return currUser;
    }

}

//update a user info bty id.
export const updateUserService = async(id:number ,name : string ,email:string,is_active:boolean)=>{

    const updatedUser  = await prisma.user.update({
        where:{id},data:{name,email,is_active}  });
  
        //did the proceedings...
        await valkey.del(`${USER_CACHE_PREFIX}${id}`);
        await valkey.del("users:all");

        return updatedUser;
    
}

//delete a user by id

export const deleteUserService = async(id:number)=> {

    const delUser = await prisma.user.delete({where : {id} });

    //did the proceedings...
    await valkey.del(`${USER_CACHE_PREFIX}${id}`);
    await valkey.del("users:all");

    return delUser;

}