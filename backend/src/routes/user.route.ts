import express from 'express';
import { newData, getData, getDataById, updateDataById, deleteDataById} from '../controllers/user.controller.js';
export const routerEndPoints = express.Router();


routerEndPoints.post(`/new`, newData);
routerEndPoints.get(`/`, getData);
routerEndPoints.get(`/:id`, getDataById);
routerEndPoints.put(`/:id`, updateDataById);
routerEndPoints.delete(`/:id`, deleteDataById);