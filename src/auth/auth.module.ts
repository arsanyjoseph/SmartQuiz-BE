import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { LocalStrategy } from "./strategy/local.strategy";
import { PasswordHandlerService } from "src/password-handler/password-handler.service";
import { UserModule } from "src/user/user.module";
import { jwtConfig } from "src/config/jwt.config";

@Module({
  imports: [UserModule, PassportModule, JwtModule.registerAsync(jwtConfig)],
  providers: [AuthService, LocalStrategy, PasswordHandlerService],
  controllers: [AuthController],
})
export class AuthModule {}
