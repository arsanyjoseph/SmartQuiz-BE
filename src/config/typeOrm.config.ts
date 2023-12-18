import { TypeOrmModuleAsyncOptions } from "@nestjs/typeorm";
import { ConfigService } from "@nestjs/config";
import { User } from "src/user/user.entity";

export const typeOrmConfig: TypeOrmModuleAsyncOptions = {
  useFactory: async (configService: ConfigService) => ({
    type: "postgres",
    host: configService.getOrThrow<string>("DB_HOST"),
    port: configService.getOrThrow<number>("DB_PORT"),
    username: configService.getOrThrow<string>("DB_USERNAME"),
    password: configService.getOrThrow<string>("DB_PASSWORD"),
    database: configService.getOrThrow<string>("DB_NAME"),
    entities: [User],
    synchronize: true,
  }),
  inject: [ConfigService],
};
