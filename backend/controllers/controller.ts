import { Request, Response } from "express";
import dotenv from "dotenv";
import {PrismaClient} from '@prisma/client';
//using valkey - redis(library) for caching
import valkey from "../lib/valkey.js";
dotenv.config();
const prisma = new PrismaClient();


// Helper for consistent keys
const USER_CACHE_PREFIX = "user:";


// @POST method
//insert the new data
export const newData = async (req: Request, res: Response) => {
  try {
    const { name, email, is_active } = req.body;

    await prisma.user.create({
      data: { name, email, is_active }
    });

    // clearing the "all users" list cache since a new user was added...
    await valkey.del("users:all");
    console.log(`-------⚡ Cache Cleared: New user added, invalidating users:all cache--------`);
    res.status(201).json({ message: "Data inserted successfully" });

  } catch (err) {
    res.status(500).send("Error inserting data");
    
  }
};

//@GET method
//fetch the data from the table
export const getData = async (req: Request, res: Response) => {

  //     const allowedTables = ['demo', 'users', 'products']; // List your table names

  // const tableName = req.params.tableName;

  // if (!allowedTables.includes(tableName)) {
  //   return res.status(400).json({ error: "Invalid table name" });
  // }
//main area...
  try {
    // 1. Check cache first
    const cached = await valkey.get("users:all");
    if (cached) {
      console.log(`-------⚡ Cache Hit: Fetching all users from Valkey--------`);
      return res.status(200).json(JSON.parse(cached));
    }
    
    // 2. If not in cache, fetch from DB
    const fetchData = await prisma.user.findMany();
    
    // 3. Store in cache for future reqs (having exp time)
    await valkey.set("users:all", JSON.stringify(fetchData), "EX", 3600); // Cache for 1 hour

    res.status(200).json(fetchData);
    // console.table(fetchData);
   
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching data");
  }
};

//@GET method
//fetch the data by id from our table
export const getDataById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    // const allowedTables = ['demo', 'users', 'products']; // List your table names safety
    const fetchDataById = await prisma.user.findUnique({ where: { id: Number(id) } });  
    res.status(200).json(fetchDataById);
    //console.table(fetchDataById);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching data by ID");
  }
};

// @PUT method
//update the data by id from our table
export const updateDataById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, email, is_active } = req.body;

    await prisma.user.update({
      where: { id: Number(id) },
      data: { name, email, is_active }
    });

    ///Delete stale cache so the next GET gets fresh data
    await valkey.del(`${USER_CACHE_PREFIX}${id}`);
    await valkey.del("users:all");

    res.status(200).json({ message: "Data updated successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error updating data");
  }
};


// @ DELETE method
// delete the data by id from our table
export const deleteDataById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await prisma.user.delete({ where: { id: Number(id) } });

    //Cleane the Valkey
    await valkey.del(`${USER_CACHE_PREFIX}${id}`);
    await valkey.del("users:all");

    res.status(200).json({ message: "Data deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error deleting data");
  }
};