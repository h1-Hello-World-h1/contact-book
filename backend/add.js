import { Router } from "express";

export const userRouter = Router();

userRouter.post('/address/contacts', async (req, res, next) => {
    const { firstname, lastname, phone, email, birthday } = req.body;
  
   
  if (!firstname || !lastname || !phone || !email || !birthday) {
    return res.status(400).json({ error: 'All fields (first name, last name, phone, email, birthday) are required' });
  }
  
    try {
      const db = client.db('address');
      const contactsCollection = db.collection('address.contacts');
  
      const newContact = { firstname, lastname, email, birthday };
      const result = await contactsCollection.insertOne(newContact);
  
      res.status(201).json(result.ops[0]);
    } catch (error) {
      res.status(500).json({ error: 'Failed to add contact' });
    }
  });

