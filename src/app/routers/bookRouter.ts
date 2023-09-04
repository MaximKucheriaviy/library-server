import { Application, Router } from "express";
import { createBookController } from "../controllers/bookControllers/createBookController";
import { getAllBooksController } from "../controllers/bookControllers/getBookController";
import { controllerWraper, uploader, refreshAuth } from "../middlewares";

export const bookRouter = Router();

bookRouter
  .post(
    "/",
    controllerWraper(refreshAuth(false, "architector") as Application),
    uploader.single("picture"),
    controllerWraper(createBookController as Application)
  )
  .get("/", getAllBooksController);
