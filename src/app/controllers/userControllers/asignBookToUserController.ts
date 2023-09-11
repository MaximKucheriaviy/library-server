import { Request, Response, NextFunction } from "express";
import { asignBookToUser } from "../../actions/userActions";
import { Types } from "mongoose";
import { createResponseData } from "../../../customTypes/responseData";

interface Params {
  id: Types.ObjectId;
}
interface Body {
  bookID: Types.ObjectId;
}

export const asignBookToUserController = async (
  req: Request<Params, Body>,
  res: Response,
  next: NextFunction
) => {
  const userID = req.params.id;
  const bookID = req.body.bookID;
  console.log(userID, bookID);
  await asignBookToUser(userID, bookID);
  res.status(200).json(createResponseData("Book asigned", undefined));
};
