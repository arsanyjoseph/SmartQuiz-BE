import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { User } from "./user.entity";
import { CreateUserDto } from "./dto/user.dto";

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
}
