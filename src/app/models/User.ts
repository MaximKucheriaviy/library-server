import { Schema, model } from "mongoose";

const UserSchema = new Schema({
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
    enum: ["admin", "user", , "achitector"],
  },
});

export const User = model("User", UserSchema);
console.log(User);
