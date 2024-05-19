import cors from "cors";
import "dotenv/config";
import express, { Request, Response } from "express";

import mongoose from "mongoose";
mongoose
  .connect(process.env.MONGODB_URI as string)
  .then(() => console.log("Connect Database Successfully!"))
  .catch((err) => console.log(err));

const app = express();
app.use(express.json());
app.use(cors());

app.get("/test", async (req: Request, res: Response) => {
  res.json({ message: "Hello World!" });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
