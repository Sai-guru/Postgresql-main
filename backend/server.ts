import express, { Application, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import { routerEndPoints } from "./src/routes/user.route.js";
dotenv.config();

// CRUD function imports
const app: Application = express();
const PORT = Number(process.env.PORT) || 4000;

app.use(express.json());
app.use(morgan("dev"));
app.use(
  cors()
  // {
  //     origin: 'http://localhost:5173'
  // }
);
app.use('/api',routerEndPoints);

// health endpoint

app.get('/health', (_req: Request, res: Response) => {
  res.send('Welcome to the PostgreSQL CRUD API');
});



app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
