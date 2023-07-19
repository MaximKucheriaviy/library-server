import { Response } from "express";
import { updateUserToken } from "../../actions/userActions";
import { AuthRequest, IUser } from "../../../customTypes/user";
import { createResponseData } from "../../../customTypes/responseData";

export const updateUserTokenController = async (
  req: AuthRequest,
  res: Response
) => {
  const id = req._id;
  const result = await updateUserToken(id);
  res.json(
    createResponseData("Tokens updated", {
      token: result.token,
      refreshToken: result.refreshToken,
    } as Pick<IUser, "token" | "refreshToken">)
  );
};
