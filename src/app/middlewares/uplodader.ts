import multer from "multer";
import { join, resolve } from "path";

const tempPath = resolve(__dirname, "../../../temp");

const storge = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, tempPath);
  },
  filename: (req, file, cb) => {
    const filename = Date.now() + file.originalname;
    cb(null, filename);
  },
});

export const uploader = multer({ storage: storge });
