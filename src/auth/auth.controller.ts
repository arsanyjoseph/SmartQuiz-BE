import {
  Controller,
  Post,
  UseGuards,
  HttpCode,
  Req,
  HttpStatus,
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LocalAuthGuard } from "./guards/local-auth.guard";
import { User } from "src/user/user.entity";
import { Public } from "src/auth/decorator/public.decorator";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @UseGuards(LocalAuthGuard)
  @HttpCode(HttpStatus.OK)
  @Post("/login")
  async login(
    @Req() { user }: { user: User },
  ): Promise<{ access_token: string }> {
    return await this.authService.login(user);
  }
}
