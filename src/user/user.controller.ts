import { Body, Controller, Get, Post, Put, Req } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/createUser.dto";
import { Public } from "src/auth/decorator/public.decorator";
import { UpdateUserDto } from "./dto/updateUser.dto";
import { JwtPayload } from "./types/jwt-payload";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Public()
  @Post("register")
  async register(@Body() createUserDto: CreateUserDto) {
    return await this.userService.register(createUserDto);
  }
  @Get("me")
  async getProfile(@Req() { user }: { user: JwtPayload }) {
    return await this.userService.getProfile(user.email);
  }

  @Put("profile")
  async updateProfile(
    @Req() { user }: { user: JwtPayload },
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return await this.userService.updateProfile({ ...user, ...updateUserDto });
  }
}
