import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { PasswordHandlerService } from "src/password-handler/password-handler.service";
import { UserModule } from "src/user/user.module";

@Module({
  imports: [UserModule],
  providers: [AuthService, PasswordHandlerService],
  controllers: [AuthController],
})
export class AuthModule {}
