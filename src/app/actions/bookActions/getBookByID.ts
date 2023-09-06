import { Types } from "mongoose";
import { Book } from "../../models/Book";
import { createAppError } from "../../../customTypes/error";

export const getBookByID = async (ID: Types.ObjectId) => {
  try {
    const book = await Book.findById(ID);
    if (!book) {
      return createAppError({ message: "Book not found", status: 400 });
    }
    return book;
  } catch (err) {
    return createAppError({ message: "Book not found", status: 400 });
  }
};
