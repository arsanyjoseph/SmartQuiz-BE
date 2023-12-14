import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { PasswordHandlerService } from "src/password-handler/password-handler.service";
import { UserModule } from "src/user/user.module";
import { jwtConfig } from "src/config/jwt.config";

@Module({
  imports: [UserModule, JwtModule.registerAsync(jwtConfig)],
  providers: [AuthService, PasswordHandlerService],
  controllers: [AuthController],
})
export class AuthModule {}
