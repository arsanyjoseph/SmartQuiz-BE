import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { UserService } from "./user.service";
import { UserController } from "./user.controller";
import { User } from "./user.entity";
import { UserRepository } from "./user.repository";
import { PasswordHandlerService } from "src/password-handler/password-handler.service";

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserService, UserRepository, PasswordHandlerService],
  controllers: [UserController],
  exports: [UserRepository],
})
export class UserModule {}
