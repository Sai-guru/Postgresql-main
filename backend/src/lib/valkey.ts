// import {Valkey} from 'iovalkey';

// // This connects to my local Arch Valkey service
// const valkey = new Valkey();

// // valkey.on('connect', () => {
// //   console.log('Connected to my local Valkey server!');
// // });

// valkey.ping()
// .then((conn)=>{
//     console.log(`Valkey connected successfully !!!!!`)
// }).catch((err)=>console.error(err.message))

// export default valkey;


//our aiven valkey cloud setup...given sdk..

import {Redis} from "ioredis";

const serviceUri : any = process.env.VALKEY_SERVICE_URI;
const valkey = new Redis(serviceUri);

valkey.set("key", "Connected the Valeky(IOREDIS-aiven) successfully");

valkey.get("key")
  .then((result:any) => {
    console.log(`The value of key is: ${result}`);

  })
  .catch((err:any) => {
    console.error("Valkey Error:", err.message);
  });

export default valkey;