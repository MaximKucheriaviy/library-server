import { User } from "../../models/User";
import { Book } from "../../models/Book";
import { Types } from "mongoose";
import { createAppError } from "../../../customTypes/error";

export const asignBookToUser = async (
  userID: Types.ObjectId,
  bookID: Types.ObjectId
) => {
  const book = await Book.findById(bookID);
  console.log(bookID);

  if (!book) {
    return createAppError({ message: "Book not found", status: 404 });
  }
  const user = await User.findById(userID);
  if (!user) {
    return createAppError({ message: "User not found", status: 404 });
  }
  const result = await User.findByIdAndUpdate(userID, {
    $push: { books: bookID },
  });
};
