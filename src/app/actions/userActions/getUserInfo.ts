import mongoose, { HydratedDocument } from "mongoose";
import { User } from "../../models/User";
import { createAppError } from "../../../customTypes/error";
import { IUser } from "../../../customTypes/user";

export const getUserInfo = async (
  id: mongoose.Types.ObjectId | string
): Promise<HydratedDocument<IUser>> => {
  try {
    const userData = await User.findById(id).select([
      "name",
      "email",
      "premision",
    ]);
    if (!userData) {
      return createAppError({ status: 400, message: "Can`t find user" });
    }
    return userData;
  } catch (err) {
    throw err;
  }
};
