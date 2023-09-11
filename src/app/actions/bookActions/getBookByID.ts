import { Types } from "mongoose";
import { Book } from "../../models/Book";
import { createAppError } from "../../../customTypes/error";
import { User } from "../../models/User";

export const getBookByID = async (ID: Types.ObjectId) => {
  try {
    const book = await Book.findById(ID);
    if (!book) {
      return createAppError({ message: "Book not found", status: 400 });
    }
    const users = await User.find({ books: { $in: [ID] } });

    return { book, users };
  } catch (err) {
    return createAppError({ message: "Book not found", status: 400 });
  }
};
