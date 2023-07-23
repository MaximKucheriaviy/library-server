import { Request, Response } from "express";
import { signInUser } from "../../actions/userActions";
import { createAppError } from "../../../customTypes/error";
import { createResponseData } from "../../../customTypes/responseData";

interface RequestBody {
  email: string;
  password: string;
}

export const signInUserController = async (req: Request, res: Response) => {
  const { email, password }: RequestBody = req.body;
  if (!email || !password) {
    createAppError({ status: 401, message: "Wrong body" });
  }
  const user = await signInUser(email, password);
  res.status(201).json(createResponseData("User signedUp", user));
};
