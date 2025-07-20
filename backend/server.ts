import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { connection } from './dbconn';
import dotenv from "dotenv";
dotenv.config();
// CRUD function imports
import { newData, getData, getDataById, updateDataById, deleteDataById } from './crudOPS';
const app: Application = express();
const PORT =  5000;

app.use(express.json());
app.use(cors(
    {
        origin: 'http://localhost:5173' 
    }
));

// Optional root endpoint
// app.get('/', (_req: Request, res: Response) => {
//   res.send('Welcome to the PostgreSQL CRUD API');
// });
const tableName = process.env.DB_TABLENAME;
app.post(`/data/${tableName}`, newData);
app.get(`/data/${tableName}`, getData);
app.get(`/data/${tableName}/:id`, getDataById);
app.put(`/data/${tableName}/:id`, updateDataById);
app.delete(`/data/${tableName}/:id`, deleteDataById);

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
  console.log("Table Name:", tableName);

});
