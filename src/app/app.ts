import express, { Application } from "express";
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
import {
  createUserController,
  updateUserTokenController,
  signInUserController,
  getUserInfoControler,
} from "./controllers/userControllers";

export const app = express();

const publickPath = path.join(__dirname, "../../public");

app.use(cors());
app.use(express.json());
app.use(morganLogger(morganSetup));
app.use(express.static(publickPath));

app.post("/api/user/", controllerWraper(createUserController));
app.get(
  "/api/refreshToken/",
  controllerWraper(refreshAuth as Application),
  controllerWraper(updateUserTokenController as Application)
);
app.get(
  "/api/user/",
  controllerWraper(refreshAuth as Application),
  controllerWraper(getUserInfoControler as Application)
);
app.post("/api/user/signup", controllerWraper(signInUserController));
app.use("/", controllerWraper(defaultError));
app.use(errorCatcher);
