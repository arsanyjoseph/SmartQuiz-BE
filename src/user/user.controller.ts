import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Req,
} from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/createUser.dto";
import { Public } from "src/auth/decorator/public.decorator";
import { UpdateUserDto } from "./dto/updateUser.dto";
import { JwtPayload } from "./types/jwt-payload";
import { Roles } from "src/auth/decorator/role.decorator";
import { UserRoles } from "./types/user.enum";
import { User } from "./user.entity";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Public()
  @Post("register")
  async register(@Body() createUserDto: CreateUserDto): Promise<User> {
    return await this.userService.register(createUserDto);
  }
  @Get("me")
  async getProfile(@Req() { user }: { user: JwtPayload }): Promise<User> {
    return await this.userService.getProfile(user.userId);
  }

  @Put("profile")
  async updateProfile(
    @Req() { user }: { user: JwtPayload },
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<User> {
    return await this.userService.updateProfile({ ...user, ...updateUserDto });
  }

  @Roles(UserRoles.Admin)
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(":id")
  async deleteProfile(@Param("id") id: string): Promise<void> {
    await this.userService.deleteProfile(parseInt(id));
  }
}
