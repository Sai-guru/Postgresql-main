import { Request, Response } from "express";
import { createUserService ,getUserDataService,getUserByIdService, updateUserService, deleteUserService} from "../services/user.service.js";


// @POST method
//insert the new data
export const newData = async (req: Request, res: Response) => {
  try {
    const { name, email, is_active } = req.body;
    await createUserService(name, email, is_active);

    res.status(201).json({ message: "Data inserted successfully" });

  } catch (err) {
    res.status(500).send("Error inserting data");
    
  }
};

//@GET method
//fetch the data from the table
export const getData = async (req: Request, res: Response) => {
  try {

    const users = await getUserDataService();
    res.status(200).json(users);
   
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching data");
  }
};

//@GET method
//fetch the data by id from our table
export const getDataById = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    // const allowedTables = ['demo', 'users', 'products']; // List your table names safety

    const fetchDataById = await getUserByIdService(id);
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
    // const { id } = req.params;
    const id = Number(req.params.id);
    const { name, email, is_active } = req.body;

    await updateUserService(id,name,email,is_active);
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
    // const { id } = req.params;
    const id = Number(req.params.id);
    await deleteUserService(id);

    res.status(200).json({ message: "Data deleted successfully" });

  } catch (err) {
    console.error(err);
    res.status(500).send("Error deleting data");
  }
};