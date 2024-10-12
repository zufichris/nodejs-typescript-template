import { ID } from "../../global/entities";
import { AuthTypes, OAuthProviders } from "../enums/auth";

export interface IUser {
  id?: ID;
  firstName: string;
  lastName?: string;
  userName?: string;
  email: string;
  password?: string;
  verified?: boolean;
  oAuthId?: string;
  authType?: AuthTypes;
  oAuthProvider?: OAuthProviders;
  refreshToken?: string;
  accessToken?: string;
  tokenExpiry?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}
