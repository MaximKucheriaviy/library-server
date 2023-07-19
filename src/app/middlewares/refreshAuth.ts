import { Request, Response, NextFunction } from "express";
import { AuthRequest } from "../../customTypes/user";
import { checkJWT } from "../service/JWT";
import { createAppError } from "../../customTypes/error";
const refreshAuth = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization;
  if (!token) {
    return createAppError({ status: 403, message: "Unathorised" });
  }
};
