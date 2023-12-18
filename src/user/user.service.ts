import { BadRequestException, Injectable } from "@nestjs/common";

import { CreateUserDto } from "./dto/createUser.dto";
import { UpdateUserDto } from "./dto/updateUser.dto";
import { UserRepository } from "./user.repository";
import { PasswordHandlerService } from "src/password-handler/password-handler.service";
import { JwtPayload } from "./types/jwt-payload";
import { User } from "./user.entity";

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly passwordHandler: PasswordHandlerService,
  ) {}
  async register({ password, ...createUserDto }: CreateUserDto): Promise<User> {
    const hash = await this.passwordHandler.hashPassword(password);

    const user = await this.userRepository.getUserByEmail(createUserDto.email);
    if (user) throw new BadRequestException("Email already registered");

    return await this.userRepository.createUser({
      ...createUserDto,
      password: hash,
    });
  }
  async getProfile(id: number): Promise<User> {
    return await this.userRepository.getUserById(id);
  }

  async updateProfile(
    updatedUserDto: UpdateUserDto & JwtPayload,
  ): Promise<User> {
    return await this.userRepository.updateUser(updatedUserDto);
  }

  async deleteProfile(id: number): Promise<void> {
    return await this.userRepository.softDeleteUser(id);
  }
}
