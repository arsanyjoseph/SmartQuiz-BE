import { Body, Controller, Get, Post, Req } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/user.dto";
import { Public } from "src/auth/decorator/public.decorator";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Public()
  @Post("register")
  async register(@Body() createUserDto: CreateUserDto) {
    return await this.userService.register(createUserDto);
  }
  @Get("me")
  async getProfile(@Req() { user }: { user: { id: string; email: string } }) {
    return await this.userService.getProfile(user.email);
  }
}
