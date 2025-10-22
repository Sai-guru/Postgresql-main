import { Request, Response } from "express";
import dotenv from "dotenv";
import {PrismaClient} from '@prisma/client';
dotenv.config();
const prisma = new PrismaClient();



// @POST method
//insert the new data
export const newData = async (req: Request, res: Response) => {
  try {
    const { name, email, is_active } = req.body;
    const postData = await prisma.user.create({
      data: {name,email,is_active}
    });
    res.status(201).json({ message: "Data inserted successfully" });
    //  console.log(postData);
  } catch (err) {
    console.error(err);
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

  try {
    const fetchData = await prisma.user.findMany();
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
    const id = req.params.id;
    const { name, email, is_active } = req.body;
    const updateData = await prisma.user.update({
      where: { id: Number(id) },
      data: { name, email, is_active }
    });
    res.status(200).json({ message: "Data updated successfully" });
    // console.table(updateData.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error updating data");
  }
};

// @ DELETE method
// delete the data by id from our table
export const deleteDataById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const deleteData = await prisma.user.delete({ where: { id: Number(id) } });
    res.status(200).json({ message: "Data deleted successfully" });
    // console.table(deleteData.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error deleting data");
  }
};
