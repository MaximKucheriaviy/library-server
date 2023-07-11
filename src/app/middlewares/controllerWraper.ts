import { Request, Response } from "express";
// import { AppError } from "../../customTypes/error";

export const controllerWraper = function (
  callback: (req: Request, res: Response, next?: Function) => Promise<any>
): (req: Request, res: Response, next: Function) => Promise<any> {
  const result = async (
    req: Request,
    res: Response,
    next: Function
  ): Promise<any> => {
    try {
      await callback(req, res);
    } catch (error: any) {
      next(error);
    }
  };
  return result;
};
