import { Request, Response } from "express";
import { connection } from "./dbconn";
import dotenv from "dotenv";
dotenv.config();
// @POST method
//insert the new data
export const newData =async(req: Request,res: Response)=> {
    try {
    const {name, email, is_active} = req.body;
    const tableName = `${process.env.DB_TABLENAME}`;
   const postData = await connection.query(`INSERT INTO ${tableName} (name, email, is_active) VALUES ($1, $2, $3)`, [name, email, is_active]);
     res.status(201).json({message: "Data inserted successfully"});
    //  console.log(postData);
    }catch(err) {
        console.error(err);
        res.status(500).send('Error inserting data');
    }
}


//@GET method
//fetch the data from the table
export const getData = async(req: Request,res: Response)=> {
   const tableName = `${process.env.DB_TABLENAME}`
//     const allowedTables = ['demo', 'users', 'products']; // List your table names

// const tableName = req.params.tableName;

// if (!allowedTables.includes(tableName)) {
//   return res.status(400).json({ error: "Invalid table name" });
// }

    try {
        const fetchData =  await connection.query(`SELECT * FROM ${tableName}`);
        res.status(200).json(fetchData.rows);
        console.table(fetchData.rows);
    }catch(err) {
        console.error(err);
        res.status(500).send('Error fetching data');
    }
}


//@GET method
//fetch the data by id from our table
export const getDataById = async(req: Request,res: Response)=> {
    try{
        const id = req.params.id;
        const tableName = `${process.env.DB_TABLENAME}`
        // const allowedTables = ['demo', 'users', 'products']; // List your table names safety
        const fetchDataById = await connection.query(`SELECT * FROM ${tableName} WHERE id = ${id}`);
        res.status(200).json(fetchDataById.rows);
        console.table(fetchDataById.rows);
    }catch(err){
        console.error(err);
        res.status(500).send('Error fetching data by ID');
        }
    }

// @PUT method
//update the data by id from our table
export const updateDataById = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const tableName = `${process.env.DB_TABLENAME}`;
        const {name,email,is_active} = req.body;
       const updateData = await connection.query(`UPDATE ${tableName} SET name =$1,email=$2,is_active=$3 WHERE id=$4`,[name,email,is_active,id] );
        res.status(200).json({message: "Data updated successfully"});
        // console.table(updateData.rows);
    }catch(err) {
        console.error(err);
        res.status(500).send('Error updating data');
    }
}

//@ DELETE method
//delete the data by id from our table
export const deleteDataById  =async(req: Request,res: Response)=> {
    try {
        const id = req.params.id;
        const tableName = `${process.env.DB_TABLENAME}`;
        const deleteData =  await connection.query(`DELETE FROM ${tableName} WHERE id = $1`,[id]);
        res.status(200).json({message: "Data deleted successfully"});
        // console.table(deleteData.rows);
    }catch(err){
        console.error(err);
        res.status(500).send('Error deleting data');
    }
}