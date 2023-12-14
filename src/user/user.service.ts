import { BadRequestException, Injectable } from "@nestjs/common";

import { CreateUserDto } from "./dto/user.dto";
import { UserRepository } from "./user.repository";
import { PasswordHandlerService } from "src/password-handler/password-handler.service";

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly passwordHandler: PasswordHandlerService,
  ) {}
  async register({ password, ...createUserDto }: CreateUserDto) {
    const hash = await this.passwordHandler.hashPassword(password);

    const user = await this.userRepository.getUserByEmail(createUserDto.email);
    if (user) throw new BadRequestException("Email already registered");

    return await this.userRepository.createUser({
      ...createUserDto,
      password: hash,
    });
  }
}
