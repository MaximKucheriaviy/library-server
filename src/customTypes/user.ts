export interface IUser {
  name: string;
  email: string;
  password: string;
  token?: string;
  premision: "admin" | "user" | "achitector";
}
