export const errorHandler = (errmsg, code) => {
  const err = new Error(errmsg);
  err.code = code;
  return err;
};
