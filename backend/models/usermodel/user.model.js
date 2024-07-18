import { client } from "../../db/connect.db.js";

export async function postUser(req, res, next) {
  try {
    await client.connect();
    const db = client.db("address");

    const collection = db.collection("contacts");

    const newContact = req.body;
    const result = await collection.insertOne(newContact);
    req.newUser = result;
    next();
  } catch (error) {
    console.log(error);
    next(error);
  } finally {
    await client.close();
  }
}
