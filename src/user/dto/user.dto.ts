import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
} from "class-validator";
import { UserRoles } from "../types/enums";

export class CreateUserDto {
  @IsNotEmpty({ message: "Please Provide First Name" })
  @IsString()
  firstName: string;

  @IsString()
  @IsNotEmpty({ message: "Please Provide Last Name" })
  lastName: string;

  @IsEmail()
  @IsNotEmpty({ message: "Please Provide an email" })
  email: string;

  @IsStrongPassword({ minLength: 8, minUppercase: 1 })
  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  @IsEnum(UserRoles)
  role: string;
}
