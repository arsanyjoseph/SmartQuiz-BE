import { TypeOrmModuleAsyncOptions } from "@nestjs/typeorm";
import { User } from "src/user/user.entity";

export const typeOrmConfig: TypeOrmModuleAsyncOptions = {
  useFactory: () => ({
    type: "postgres",
    host: "localhost",
    port: 3306,
    username: "postgres",
    password: "134678",
    database: "smart_quiz",
    entities: [User],
    synchronize: true,
  }),
};
