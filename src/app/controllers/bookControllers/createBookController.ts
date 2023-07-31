import { Response } from "express";
import { AuthRequest } from "../../../customTypes/user";
import { User } from "../../models/User";
import { createAppError } from "../../../customTypes/error";
import { IBook } from "../../../customTypes/book";
import { upload } from "../../service/cloudinaryLoader";
import { Book } from "../../models/Book";
import { createResponseData } from "../../../customTypes/responseData";

export const createBookController = async (req: AuthRequest, res: Response) => {
  const data = req.body;
  const file = req.file;
  const fileInfo = await upload(file?.path as string);

  let sendData: Partial<IBook> = data;
  sendData.picture = {
    url: fileInfo.url,
    publick_id: fileInfo.public_id,
  };

  sendData.ganre = JSON.parse(data.ganre);
  sendData.keyWords = JSON.parse(data.keyWords);
  console.log(sendData);
  const result = await Book.create(sendData);
  res.status(201).json(createResponseData("Book created", result));
};
