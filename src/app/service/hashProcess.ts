import bcript from "bcrypt";

export function hashPassword(password: string): string {
  const encriptedPassword = bcript.hashSync(password, 10);
  return encriptedPassword;
}

export function checkPassword(
  passwrod: string,
  encriptedPassword: string
): boolean {
  const result = bcript.compareSync(passwrod, encriptedPassword);
  return result;
}
