import { Client } from "pg";
import dotenv from "dotenv";
dotenv.config();
export const connection =  new Client({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: Number(process.env.DB_PORT),
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

connection.connect()
.then(()=> console.log("Connected to PostgreSQL"))
.catch((err: Error) => console.error("Connection error", err.stack));