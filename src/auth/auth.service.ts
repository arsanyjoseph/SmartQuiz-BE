import {
  HttpException,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

import { AuthDto } from "./dto/auth.dto";
import { UserRepository } from "src/user/user.repository";
import { PasswordHandlerService } from "src/password-handler/password-handler.service";
import { User } from "src/user/user.entity";

@Injectable()
export class AuthService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly passwordHandler: PasswordHandlerService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(authDto: AuthDto) {
    const user = await this.userRepository.getUserByEmail(authDto.email);
    if (!user) {
      throw new HttpException("User not found", 404);
    }
    const isPasswordVerified = await this.passwordHandler.verifyPassword(
      user.password,
      authDto.password,
    );

    if (!isPasswordVerified) {
      throw new UnauthorizedException("Password is not matching");
    }
    return user;
  }

  async login(user: User) {
    const payload = { sub: user.id, email: user.email };
    return { access_token: await this.jwtService.signAsync(payload) };
  }
}
