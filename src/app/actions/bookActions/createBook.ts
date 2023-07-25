import { Book } from "../../models/Book";
import { IBook } from "../../../customTypes/book";
import { HydratedDocument } from "mongoose";
import { createAppError } from "../../../customTypes/error";

export const createBook = async (
  data: IBook
): Promise<HydratedDocument<IBook>> => {
  try {
    const result = Book.create(data);
    if (!result) {
      return createAppError({ message: "Book creation error", status: 400 });
    }
    return result;
  } catch (err) {
    return createAppError({ message: "Book creation error", status: 400 });
  }
};
