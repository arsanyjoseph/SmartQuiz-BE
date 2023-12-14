import { UserRoles } from "./user.enum";

export interface JwtPayload {
  sub: string;
  email: string;
  role: UserRoles;
}
