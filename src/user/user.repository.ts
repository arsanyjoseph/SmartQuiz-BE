import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { User } from "./user.entity";
import { CreateUserDto } from "./dto/createUser.dto";
import { UpdateUserDto } from "./dto/updateUser.dto";
import { JwtPayload } from "./types/jwt-payload";

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}
  async createUser(createUserDto: CreateUserDto) {
    return await this.userRepository.save(createUserDto);
  }
  async getUserByEmail(email: string) {
    return await this.userRepository.findOneBy({ email });
  }
  async getUserById(id: number) {
    return await this.userRepository.findOneOrFail({ where: { id } });
  }
  async getUserWithPassword(email: string) {
    return await this.userRepository
      .createQueryBuilder("user")
      .addSelect("user.password")
      .where("user.email = :email", { email })
      .getOneOrFail();
  }
  async updateUser({
    firstName,
    lastName,
    isActive,
    userId,
  }: UpdateUserDto & JwtPayload) {
    const user = await this.getUserById(userId);
    if (user) {
      user.firstName = firstName;
      user.lastName = lastName;
      user.isActive = isActive;
    }
    return await this.userRepository.save(user);
  }

  async softDeleteUser(id: number) {
    await this.userRepository.softDelete(id);
  }
}
