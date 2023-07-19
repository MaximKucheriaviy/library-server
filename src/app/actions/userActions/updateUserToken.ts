import { HydratedDocument, ObjectId } from "mongoose";
import { IUser } from "../../../customTypes/user";
import { User } from "../../models/User";
import { createAppError } from "../../../customTypes/error";
import { Types } from "mongoose";
import { createJWT } from "../../service/JWT";

export const updateUserToken = async (
  id: Types.ObjectId
): Promise<HydratedDocument<IUser>> => {
  try {
    const result = await User.findByIdAndUpdate(
      id,
      {
        token: createJWT(id),
        refreshToken: createJWT(id),
      },
      { returnOriginal: false }
    );
    if (result !== null) {
      return result as HydratedDocument<IUser>;
    }
    return createAppError({ message: "Update token", status: 400 });
  } catch (error) {
    return createAppError({ message: "Update token", status: 400 });
  }
};
