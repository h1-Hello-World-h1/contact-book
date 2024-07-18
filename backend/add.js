import { Router } from "express";
import { postUser } from "./models/usermodel/user.model.js";
import { checkbody } from "./middleware/checkbody.js";



export const userRouter = Router();

userRouter.post('/address/contacts', checkbody, postUser, async (req, res, next) => {
   
    
  

  res.status(200).json(req.newUser);
  
  });

