import { HydratedDocument } from "mongoose";
import { User } from "../../models/User";
import { IUser } from "../../../customTypes/user";
import { checkPassword } from "../../service/hashProcess";
import { createAppError } from "../../../customTypes/error";
import { updateUserToken } from "./updateUserToken";

export const signInUser = async (
  email: string,
  password: string
): Promise<HydratedDocument<IUser>> => {
  try {
    const userInfo = await User.findOne({ email });
    if (!userInfo) {
      return createAppError({ message: "Wrong Email", status: 401 });
    }
    if (!checkPassword(password, userInfo.password)) {
      return createAppError({ message: "Wrong password", status: 401 });
    }
    const logedUser = await updateUserToken(userInfo._id);
    return logedUser;
  } catch (err) {
    throw err;
  }
};
