import express, { Application } from "express";
const cors = require("cors");
import {
  morganLogger,
  morganSetup,
  defaultError,
  controllerWraper,
  errorCatcher,
} from "./middlewares";
import path from "path";
import { createUserController } from "./controllers/userControllers";
import { refreshAuth } from "./middlewares/refreshAuth";
import { updateUserToken } from "./actions/userActions";
import { updateUserTokenController } from "./controllers/userControllers/updateUserToken";

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
app.use("/", controllerWraper(defaultError));
app.use(errorCatcher);
