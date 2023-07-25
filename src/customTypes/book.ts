export interface IBook {
  name: string;
  author: string;
  reliseDate: number;
  picture: {
    url: string;
    publick_id: string;
  };
  description: string;
  ganre: Array<string>;
  keyWords: Array<string>;
  countOfExamples: number;
  inHands: number;
}
