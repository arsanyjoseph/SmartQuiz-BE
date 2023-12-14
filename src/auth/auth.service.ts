import { Injectable } from "@nestjs/common";
import { AuthDto } from "./dto/auth.dto";
import { UserRepository } from "src/user/user.repository";
import { PasswordHandlerService } from "src/password-handler/password-handler.service";

@Injectable()
export class AuthService {
  constructor(
    private readonly usersRepository: UserRepository,
    private readonly passwordHandler: PasswordHandlerService,
  ) {}
  async login(authDto: AuthDto) {
    console.log(authDto);
  }
}
