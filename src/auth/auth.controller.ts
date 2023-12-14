import { Controller, Post, UseGuards, HttpCode, Req } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LocalAuthGuard } from "./guards/local-auth.guard";
import { User } from "src/user/user.entity";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @HttpCode(200)
  @Post("/login")
  async login(@Req() { user }: { user: User }) {
    return await this.authService.login(user);
  }
}
