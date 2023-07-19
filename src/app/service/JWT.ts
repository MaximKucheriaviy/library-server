import { ObjectId, now } from "mongoose";
import * as JWT from "jsonwebtoken";
import IDotenv from "../../customTypes/dotenv";
import { token } from "morgan";
import mongouse from "mongoose";
const dotenv = require("dotenv").config() as IDotenv;

export const createJWT = (
  id: mongouse.Types.ObjectId,
  liefeTime: number = 1
): string => {
  const expiresIn: number = Math.floor(60 * liefeTime);
  const iat: number = Math.floor(Date.now() / 1000);
  const token = JWT.sign({ _id: id }, dotenv.parsed.SECRET_WORD as string, {
    expiresIn,
  });
  return token;
};

enum JWTStatus {
  pased,
  timeout,
  failed,
}

export const checkJWT = (
  token: string,
  timing: boolean = false
): JWTStatus | JWT.JwtPayload => {
  try {
    const res = JWT.verify(token, dotenv.parsed.SECRET_WORD as string, {
      ignoreExpiration: timing,
    });
    return res as JWT.JwtPayload;
  } catch (err) {
    if (err instanceof JWT.TokenExpiredError) {
      return JWTStatus.failed;
    }
    throw err;
  }
};
