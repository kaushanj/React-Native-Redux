export interface IUser {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
}

export type IUserRegister = Exclude<IUser, "id">;
export type IUserLogin = { username: string; password: string };
