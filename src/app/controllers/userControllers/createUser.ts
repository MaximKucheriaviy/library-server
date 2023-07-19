import { IUser } from "../../../customTypes/user";
import { createUser } from "../../actions/userActions/createUser";
import { Request, Response } from "express";
import { hashPassword } from "../../service/hashProcess";
import { createResponseData } from "../../../customTypes/responseData";
import { HydratedDocument } from "mongoose";
import { createJWT } from "../../service/JWT";

export async function createUserController(req: Request, res: Response) {
  const body = req.body as IUser;
  body.password = hashPassword(body.password);
  let result = (await createUser(body)) as HydratedDocument<IUser>;
  res.json(createResponseData("User created", result)).status(201);
}
