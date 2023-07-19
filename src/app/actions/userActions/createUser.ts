import { User } from "../../models/User";
import { IUser } from "../../../customTypes/user";
import { AppError, createAppError } from "../../../customTypes/error";
import mongoose, { HydratedDocument, ObjectId } from "mongoose";
import { updateUserToken } from "./updateUserToken";
import { createJWT } from "../../service/JWT";

export const createUser = async (
  data: IUser
): Promise<HydratedDocument<IUser>> => {
  try {
    const userData = await User.create(data);
    if (!userData) {
      return createAppError({ message: "User creation error", status: 400 });
    }
    const result = await updateUserToken(userData._id);
    return result;
  } catch (error) {
    return createAppError({ message: "User creation error", status: 400 });
  }
};
