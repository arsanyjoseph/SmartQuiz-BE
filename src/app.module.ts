import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule } from "@nestjs/config";

import { UserModule } from "./user/user.module";
import { typeOrmConfig } from "./config/typeOrm.config";
import { AuthModule } from "./auth/auth.module";
import { PasswordHandlerModule } from "./password-handler/password-handler.module";

@Module({
  imports: [
    TypeOrmModule.forRootAsync(typeOrmConfig),
    ConfigModule.forRoot({ isGlobal: true }),
    UserModule,
    AuthModule,
    PasswordHandlerModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
