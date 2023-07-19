import { app } from "./app/app";
import IDotenv from "./customTypes/dotenv";
import mongoose from "mongoose";
const dotenv = require("dotenv").config() as IDotenv;
import { updateUserToken } from "./app/actions/userActions/updateUserToken";
console.log("Starting app");

app.listen(dotenv.parsed.PORT, (): void => {
  console.log(`Server runnig on port ${dotenv.parsed.PORT}`);
});

mongoose.set("strictQuery", false);
if (typeof dotenv.parsed.MDB_CONNECTION === "string") {
  mongoose.connect(dotenv.parsed.MDB_CONNECTION).then(() => {
    console.log("Database connected");
  });
}
