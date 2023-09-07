import { Request, Response, NextFunction } from "express";
import { asignBookToUser } from "../../actions/userActions";
import { Types } from "mongoose";

interface Params {
  id: Types.ObjectId;
}
interface Body {
  bookID: Types.ObjectId;
}

export const asignBookToUserController = async (
  req: Request<Params, Body>,
  res: Response,
  next:
) => {
  try{
    const userID = req.params.id;
    const bookID = req.body.bookID;
    console.log(userID, bookID);
  
    await asignBookToUser(userID, bookID);
  }
  catch(error){
    return error
  }
};
