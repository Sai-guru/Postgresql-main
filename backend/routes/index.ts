import express from 'express';
import { newData, getData, getDataById, updateDataById, deleteDataById} from '../controllers/controller.js';
export const routerEndPoints = express.Router();

routerEndPoints.post(`/data-new`, newData);
routerEndPoints.get(`/data`, getData);
routerEndPoints.get(`/data/:id`, getDataById);
routerEndPoints.put(`/data/:id`, updateDataById);
routerEndPoints.delete(`/data/:id`, deleteDataById);