import { Injectable } from "@nestjs/common";

import { CreateUserDto } from "./dto/user.dto";
import { UserRepository } from "./user.repository";
import { PasswordHandlerService } from "src/password-handler/password-handler.service";

@Injectable()
export class UserService {
  constructor(
    private readonly usersRepository: UserRepository,
    private readonly passwordHandler: PasswordHandlerService,
  ) {}
  async register({ password, ...user }: CreateUserDto) {
    const hash = await this.passwordHandler.hashPassword(password);
    return await this.usersRepository.createUser({ ...user, password: hash });
  }
}
