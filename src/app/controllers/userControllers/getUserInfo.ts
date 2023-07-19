import { Response } from "express";
import { AuthRequest } from "../../../customTypes/user";
import { getUserInfo } from "../../actions/userActions";
import { createResponseData } from "../../../customTypes/responseData";

export const getUserInfoControler = async (req: AuthRequest, res: Response) => {
  const id = req._id;
  const userData = await getUserInfo(id);
  res.json(createResponseData("User finded", userData));
};
