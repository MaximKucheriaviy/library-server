import { Book } from "../../models/Book";
import { IBook } from "../../../customTypes/book";
import { HydratedDocument } from "mongoose";
import { createAppError } from "../../../customTypes/error";

export const getAllBooks = async (
  keyword: string
): Promise<Array<HydratedDocument<IBook>>> => {
  try {
    let data;
    if (!keyword) {
      data = await Book.find();
    } else {
      data = await Book.find({ name: { $regex: keyword } });
    }
    if (!data) {
      return createAppError({ message: "Book found error", status: 404 });
    }
    return data;
  } catch (err) {
    return createAppError({ message: "Book net found", status: 404 });
  }
};
