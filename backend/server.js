import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { userRouter } from "./add.js";

dotenv.config();

const app = express();
const port = 3000;

app.use(json());
app.use(cors());
app.use("/user", userRouter);

app.all("*", (req, res) => {
  res.status(404).json({
    code: 404,
    answer: "Page not found!",
  });
});

app.use((err, req, res, next) => {
  res.status(err.code).json({
    code: err.code,
    answer: err.message,
  });
});

app.listen(port, () => {
  console.log(`Up at: http://localhost:${port}`);
});
