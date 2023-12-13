import { Repository } from "typeorm";
import { User } from "./user.entity";
import { CreateUserDto } from "./dto/user.dto";

export class UserRepository extends Repository<User> {
  async createUser(user: CreateUserDto) {
    return await this.save(user);
  }
  async getUserByEmail(user: CreateUserDto) {
    return await this.findOneBy({ email: user.email });
  }
}
