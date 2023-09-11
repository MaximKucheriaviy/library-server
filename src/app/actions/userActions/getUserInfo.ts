import mongoose, { HydratedDocument } from "mongoose";
import { User } from "../../models/User";
import { createAppError } from "../../../customTypes/error";
import { IUser } from "../../../customTypes/user";
import { Book } from "../../models/Book";

export const getUserInfo = async (
  id: mongoose.Types.ObjectId | string
): Promise<HydratedDocument<IUser>> => {
  try {
    const userData = await User.findById(id)
      .populate("books")
      .select(["name", "email", "premision", "books"]);

    if (!userData) {
      return createAppError({ status: 400, message: "Can`t find user" });
    }
    return userData;
  } catch (err) {
    throw err;
  }
};
