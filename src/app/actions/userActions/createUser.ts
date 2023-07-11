import { User } from "../../models/User";
import { IUser } from "../../../customTypes/user";
import { AppError, createAppError } from "../../../customTypes/error";
import { HydratedDocument } from "mongoose";
export const createUser = async (
  data: IUser
): Promise<HydratedDocument<IUser> | void> => {
  try {
    const result = await User.create(data);
    if (!result) {
      createAppError({ message: "User creation error", status: 400 });
    }
    return result;
  } catch (error) {
    createAppError({ message: "User creation error", status: 400 });
  }
};
