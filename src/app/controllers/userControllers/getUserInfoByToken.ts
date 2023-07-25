import { Response } from "express";
import { AuthRequest, IUser } from "../../../customTypes/user";
import { getUserInfo } from "../../actions/userActions";
import { createResponseData } from "../../../customTypes/responseData";

export const getUserInfoByTokenControler = async (
  req: AuthRequest,
  res: Response
) => {
  const id = req._id;
  const { name, email, premision } = await getUserInfo(id);
  res
    .status(200)
    .json(createResponseData("User finded", { name, email, premision }));
};
