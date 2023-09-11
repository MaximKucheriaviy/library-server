import { Router } from "express";
import { controllerWraper, refreshAuth } from "../middlewares";
import {
  createUserController,
  updateUserTokenController,
  getUserInfoControler,
  signInUserController,
  getUserInfoByTokenControler,
  asignBookToUserController,
} from "../controllers/userControllers";
import { Application } from "express";

export const userRouter = Router();
userRouter.post("/login", controllerWraper(createUserController));
userRouter.get(
  "/refreshToken",
  controllerWraper(refreshAuth(true) as Application),
  controllerWraper(updateUserTokenController as Application)
);
userRouter.get(
  "/userInfo",
  controllerWraper(refreshAuth() as Application),
  controllerWraper(getUserInfoByTokenControler as Application)
);
userRouter.get("/:id", controllerWraper(getUserInfoControler as Application));
userRouter.post("/signup", controllerWraper(signInUserController));
userRouter.put(
  "/:id",
  controllerWraper(asignBookToUserController as Application)
);
