import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { userRouter } from "./add.js";
import { MongoClient, ServerApiVersion } from "mongodb";
dotenv.config();

const app = express();
const port = 3000;
const uri = process.env.MONGO_URL;


const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    
    await client.connect();
    
    await client.db("admin").command({ ping: 1 });
console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
  
    await client.close();
  }
}
run().catch(console.dir);

app.use(json());
app.use(cors());
app.use('/address/contacts', userRouter);

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
