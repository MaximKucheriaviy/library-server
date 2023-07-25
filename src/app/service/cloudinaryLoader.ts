import IDotenv from "../../customTypes/dotenv";
import * as cloudinary from "cloudinary";
import * as fs from "fs/promises";
import * as path from "path";
const dotenv = require("dotenv").config() as IDotenv;

cloudinary.v2.config({
  cloud_name: dotenv.parsed.CLOUD_NAME,
  api_key: dotenv.parsed.API_KEY,
  api_secret: dotenv.parsed.API_SECRET,
});

const upload = async (filePath: string) => {
  try {
    const result = await cloudinary.v2.uploader.upload(
      path.resolve(__dirname, filePath)
    );

    await fs.unlink(filePath);
    return result;
  } catch (err) {
    console.log(err);
  }
};

//url
//secure_url
//public_id

const deleteResource = async (id: string) => {
  try {
    const res = await cloudinary.v2.api.delete_resources([id]);
  } catch (err) {
    throw err;
  }
};

export { deleteResource, upload };
