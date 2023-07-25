import { Response } from "express";
import { AuthRequest } from "../../../customTypes/user";
import { User } from "../../models/User";
import { createAppError } from "../../../customTypes/error";
import { IBook } from "../../../customTypes/book";

const createBookController = async (req: AuthRequest, res: Response) => {
  const user = await User.findById(req._id);
  if (user?.premision !== "achitector") {
    createAppError({ message: "Creation forbided", status: 401 });
  }
  const data = req.body as IBook;
  const file = req.file;
};
