import { errorHandler } from "../lib/Error.js";

export const checkbody = (req, res, next) => {
  const { firstname, lastname, phone, email, birthday } = req.body;

  if (!firstname && !lastname && !phone && !email && !birthday) {
    next(
      errorHandler(
        "All fields (first name, last name, phone, email, birthday) are required",
        400
      )
    );
  }
  next();
};
