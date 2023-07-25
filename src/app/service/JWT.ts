import { ObjectId, now } from "mongoose";
import * as JWT from "jsonwebtoken";
import IDotenv from "../../customTypes/dotenv";
import { token } from "morgan";
import mongouse from "mongoose";
const dotenv = require("dotenv").config() as IDotenv;

export const createJWT = (
  id: mongouse.Types.ObjectId,
  liefeTime: number = 5
): string => {
  const expiresIn: number = Math.floor(60 * liefeTime);
  const iat: number = Math.floor(Date.now() / 1000);
  const token = JWT.sign({ _id: id }, dotenv.parsed.SECRET_WORD as string, {
    expiresIn,
  });
  return token;
};

export enum JWTStatus {
  pased,
  timeout,
  failed,
}

interface CheckJWTPayload extends JWT.JwtPayload {
  _id: mongouse.Types.ObjectId;
}

interface CheckJWTResponse {
  status: JWTStatus;
  payload?: CheckJWTPayload;
}

export const checkJWT = (
  token: string,
  timing: boolean = true
): CheckJWTResponse => {
  try {
    const res = JWT.verify(token, dotenv.parsed.SECRET_WORD as string, {
      ignoreExpiration: !timing,
    });
    return {
      status: JWTStatus.pased,
      payload: res as CheckJWTPayload,
    };
  } catch (err) {
    return {
      status: JWTStatus.failed,
    };
  }
};
