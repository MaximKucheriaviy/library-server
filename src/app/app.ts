import express from "express";
const cors = require("cors");
import {
  morganLogger,
  morganSetup,
  defaultError,
  controllerWraper,
  errorCatcher,
  refreshAuth,
} from "./middlewares";
import path from "path";
import { userRouter, bookRouter } from "./routers";

export const app = express();

const publickPath = path.join(__dirname, "../../public");

app.use(cors());
app.use(express.json());
app.use(morganLogger(morganSetup));
app.use(express.static(publickPath));
app.use("/api/user/", userRouter);
app.use("/api/books/", bookRouter);
app.use("/", controllerWraper(defaultError));
app.use(errorCatcher);
