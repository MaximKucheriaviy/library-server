import express from "express";
const cors = require("cors");
import {
  morganLogger,
  morganSetup,
  defaultError,
  controllerWraper,
  errorCatcher,
} from "./middlewares";
import path from "path";
import { Request, Response } from "express";
import { User } from "./models/User";
import { hashPassword, checkPassword } from "./service/hashProcess";

export const app = express();

const publickPath = path.join(__dirname, "../../public");

app.use(cors());
app.use(express.json());
app.use(morganLogger(morganSetup));
app.use(express.static(publickPath));
app.use("/", controllerWraper(defaultError));
app.use(errorCatcher);
