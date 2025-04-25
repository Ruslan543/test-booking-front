export interface IUser {
  id: string;
  email: string;
  createdAt: string;
  roles: TypeRolesUser[];
}

export interface IEmailPassword {
  email: string;
  password: string;
}

export interface ITokens {
  accessToken: string;
}

export interface IAuthResponse extends ITokens {
  user: IUser;
}

export const ROLES = {
  ADMIN: "ADMIN",
  USER: "USER",
} as const;

export type TypeRolesUser = (typeof ROLES)[keyof typeof ROLES];
