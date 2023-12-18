import { Transform } from "class-transformer";
import { IsNotEmpty, IsString } from "class-validator";

export class UpdateUserDto {
  @IsString()
  @IsNotEmpty({ message: "Please Provide First Name" })
  firstName: string;

  @IsString()
  @IsNotEmpty({ message: "Please Provide Last Name" })
  lastName: string;

  @Transform((value) => value ?? "true")
  isActive: boolean;
}
