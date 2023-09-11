import { Schema, Types, model } from "mongoose";
import { IUser } from "../../customTypes/user";
import { Book } from "./Book";

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
  refreshToken: String,
  premision: {
    type: String,
  },
  books: [
    {
      type: Types.ObjectId,
      ref: Book,
    },
  ],
});

export const User = model<IUser>("Users", UserSchema);
