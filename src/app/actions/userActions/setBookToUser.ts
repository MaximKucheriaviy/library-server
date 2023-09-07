import { User } from "../../models/User";
import { Book } from "../../models/Book";
import { Types } from "mongoose";
import { createAppError } from "../../../customTypes/error";

export const asignBookToUser = async (
  bookID: Types.ObjectId,
  userID: Types.ObjectId
) => {
  try {
    const book = await Book.findById(bookID);
    if (!book) {
      return createAppError({ message: "Book not found", status: 404 });
    }
    const user = await User.findById(userID);
    if (!user) {
      return createAppError({ message: "User not found", status: 404 });
    }
    await User.findByIdAndUpdate(userID, { $push: { books: bookID } });
  } catch (err) {
    return createAppError({ message: "Book acign fail", status: 400 });
  }
};
