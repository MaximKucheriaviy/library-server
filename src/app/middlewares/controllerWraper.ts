import { NextFunction, Request, Response } from "express";
import { AuthRequest } from "../../customTypes/user";
// import { AppError } from "../../customTypes/error";

export const controllerWraper = function (
  callback: (
    req: Request | AuthRequest,
    res: Response,
    next?: Function
  ) => Promise<any>
): (req: Request, res: Response, next: NextFunction) => Promise<any> {
  const result = async (
    req: Request | AuthRequest,
    res: Response,
    next: Function
  ): Promise<any> => {
    try {
      await callback(req, res, next);
    } catch (error: any) {
      return next(error);
    }
  };
  return result;
};
