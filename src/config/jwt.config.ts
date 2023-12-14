import { ConfigService } from "@nestjs/config";
import { JwtModuleAsyncOptions } from "@nestjs/jwt";

export const jwtConfig: JwtModuleAsyncOptions = {
  useFactory: async (configService: ConfigService) => ({
    global: true,
    secret: configService.getOrThrow<string>("JWT_SECRET"),
    signOptions: {
      expiresIn: configService.getOrThrow<number>("JWT_EXPIRES_IN"),
    },
  }),
  inject: [ConfigService],
};
