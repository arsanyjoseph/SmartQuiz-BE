import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  register(user: UserDto) {
    console.log(user);
  }
}
