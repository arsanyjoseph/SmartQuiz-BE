import { Body, Controller, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/user.dto";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post("/register")
  async register(@Body() user: CreateUserDto) {
    return await this.userService.register(user);
  }
}
