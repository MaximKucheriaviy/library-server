import { Response } from "express";
import { AuthRequest, IUser } from "../../../customTypes/user";
import { getUserInfo } from "../../actions/userActions";
import { createResponseData } from "../../../customTypes/responseData";

export const getUserInfoControler = async (req: AuthRequest, res: Response) => {
  const id = req.params.id;
  const { name, email, premision } = await getUserInfo(id);
  res
    .status(200)
    .json(createResponseData("User finded", { name, email, premision }));
};
