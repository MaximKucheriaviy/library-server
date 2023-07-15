import { Schema, model } from "mongoose";
import { IUser } from "../../customTypes/user";

const UserSchema = new Schema<IUser>({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  token: String,
  premision: {
    type: String,
  },
});

export const User = model<IUser>("Users", UserSchema);
