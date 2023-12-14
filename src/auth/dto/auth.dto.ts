import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class AuthDto {
  @IsNotEmpty({ message: "This field could not be empty" })
  @IsEmail()
  email: string;
  @IsNotEmpty({ message: "This field could not be empty" })
  @IsString({ message: "Please enter a valid password" })
  password: string;
}
