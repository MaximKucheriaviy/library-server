import { Response, Request, NextFunction } from "express";
import { AppError } from "../../customTypes/error";
import { createResponseData } from "../../customTypes/responseData";

export const errorCatcher = function (
  error: AppError | Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if ("status" in error) {
    res.status(error.status).json(createResponseData(error.message));
  } else {
    res.json(createResponseData("Server error")).status(500);
    console.log(error);
  }
};
