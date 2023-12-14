import { Repository } from "typeorm";
import { User } from "./user.entity";
import { CreateUserDto } from "./dto/user.dto";
import { InjectRepository } from "@nestjs/typeorm";

export class UserRepository {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}
  async createUser(user: CreateUserDto) {
    return await this.userRepository.save(user);
  }
  async getUserByEmail(user: CreateUserDto) {
    return await this.userRepository.findOneBy({ email: user.email });
  }
}
