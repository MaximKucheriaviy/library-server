import { Response, NextFunction } from "express";
import { AuthRequest, IUser } from "../../customTypes/user";
import { JWTStatus, checkJWT } from "../service/JWT";
import { createAppError } from "../../customTypes/error";
import { User } from "../models/User";

export const refreshAuth = (
  refresh: boolean = false,
  premision?: "admin" | "user" | "architector"
) => {
  return async (req: AuthRequest, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;

    if (!token) {
      return createAppError({ status: 403, message: "Unathorised" });
    }
    const JWTResult = checkJWT(token);

    if (JWTResult.status !== JWTStatus.pased) {
      return createAppError({ status: 403, message: "JWT: timeout" });
    }
    const userData = await User.findById(JWTResult.payload?._id);
    if (!userData) {
      return createAppError({ status: 403, message: "JWT: wrong ID" });
    }
    if (token !== (refresh ? userData.refreshToken : userData.token)) {
      return createAppError({ status: 403, message: "JWT: wrong JWT" });
    }
    if (premision) {
      if (premision !== userData.premision) {
        return createAppError({ status: 403, message: "No such premision" });
      }
    }
    req._id = userData._id;
    next();
  };
};
