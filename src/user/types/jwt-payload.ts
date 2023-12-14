import { UserRoles } from "./user.enum";

export interface JwtPayload {
  userId: number;
  email: string;
  role: UserRoles;
}
