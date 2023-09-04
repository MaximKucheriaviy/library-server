import { Request, Response } from "express";
import { getAllBooks } from "../../actions/bookActions";
import { createResponseData } from "../../../customTypes/responseData";

interface RequestParams {
  keyword: string | any;
}

export const getAllBooksController = async (req: Request, res: Response) => {
  const { keyword } = req.query;
  const result = await getAllBooks(keyword as string);
  res.status(201).json(createResponseData("Boocks found", result));
};
