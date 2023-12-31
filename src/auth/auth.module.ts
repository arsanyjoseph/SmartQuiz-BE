import { APP_GUARD } from "@nestjs/core";
import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { LocalStrategy } from "./strategy/local.strategy";
import { PasswordHandlerService } from "src/password-handler/password-handler.service";
import { UserModule } from "src/user/user.module";
import { jwtConfig } from "src/config/jwt.config";
import { JwtAuthGuard } from "./guards/jwt-auth.guard";
import { JwtStrategy } from "./strategy/jwt.startegy";
import { RolesGuard } from "./guards/user-roles.guard";

@Module({
  imports: [UserModule, PassportModule, JwtModule.registerAsync(jwtConfig)],
  providers: [
    AuthService,
    LocalStrategy,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
    JwtStrategy,
    PasswordHandlerService,
  ],
  controllers: [AuthController],
})
export class AuthModule {}
