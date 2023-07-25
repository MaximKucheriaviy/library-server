import { Schema, model } from "mongoose";
import { IBook } from "../../customTypes/book";

const BookSchema = new Schema<IBook>({
  name: {
    type: String,
    require: true,
  },
  author: {
    type: String,
    require: true,
  },
  reliseDate: {
    type: Number,
    require: true,
  },
  description: {
    type: String,
  },
  picture: new Schema({
    url: {
      type: String,
      require: true,
    },
    publick_id: {
      type: String,
      require: true,
    },
  }),
  ganre: {
    type: Array(String),
    default: [],
  },
  keyWords: {
    type: Array(String),
    default: [],
  },
  countOfExamples: {
    type: Number,
    require: true,
  },
  inHands: {
    type: Number,
    default: 0,
  },
});

export const Book = model<IBook>("Books", BookSchema);
