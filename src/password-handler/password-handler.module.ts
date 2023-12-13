import { Module } from "@nestjs/common";
import { PasswordHandlerService } from "./password-handler.service";

@Module({
  providers: [PasswordHandlerService],
})
export class PasswordHandlerModule {}
