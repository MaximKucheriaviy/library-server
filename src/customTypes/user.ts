import { Types } from "mongoose";
import { Request } from "express";

export interface IUser {
  name: string;
  email: string;
  password: string;
  token?: string;
  refreshToken?: string;
  premision: "admin" | "user" | "architector";
}

export interface AuthRequest extends Request {
  _id: Types.ObjectId;
}
