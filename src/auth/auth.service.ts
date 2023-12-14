import {
  HttpException,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { AuthDto } from "./dto/auth.dto";
import { UserRepository } from "src/user/user.repository";
import { PasswordHandlerService } from "src/password-handler/password-handler.service";

@Injectable()
export class AuthService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly passwordHandler: PasswordHandlerService,
  ) {}
  async login(authDto: AuthDto) {
    const user = await this.userRepository.getUserByEmail(authDto.email);
    if (!user) {
      throw new HttpException("User not found", 404);
    }
    const isPasswordVerified = this.passwordHandler.verifyPassword(
      user.password,
      authDto.password,
    );

    if (!isPasswordVerified) {
      throw new UnauthorizedException("Password is not matching");
    }
    console.log(authDto);
  }
}
