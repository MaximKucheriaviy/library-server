import { Application, Router } from "express";
import { createBookController } from "../controllers/bookControllers/createBookController";
import { getAllBooksController } from "../controllers/bookControllers/getBookController";
import { getBookByIdController } from "../controllers/bookControllers/getBookByIDController";
import { controllerWraper, uploader, refreshAuth } from "../middlewares";

export const bookRouter = Router();

bookRouter
  .post(
    "/",
    controllerWraper(refreshAuth(false, "architector") as Application),
    uploader.single("picture"),
    controllerWraper(createBookController as Application)
  )
  .get("/", controllerWraper(getAllBooksController))
  .get("/:id", controllerWraper(getBookByIdController as Application));
