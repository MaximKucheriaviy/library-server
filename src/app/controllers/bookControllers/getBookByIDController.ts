import { Request, Response } from "express";
import { getBookByID } from "../../actions/bookActions";
import { createResponseData } from "../../../customTypes/responseData";
import { Types } from "mongoose";

interface Params {
  id: Types.ObjectId;
}

export const getBookByIdController = async (
  req: Request<Params>,
  res: Response
) => {
  const id = req.params.id;
  const book = await getBookByID(id);
  res.status(200).json(createResponseData("Book found", book));
};
