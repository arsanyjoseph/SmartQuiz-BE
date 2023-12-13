import { Module } from "@nestjs/common";
import { PasswordHandlerService } from "./password-handler.service";

@Module({
  exports: [PasswordHandlerModule],
  providers: [PasswordHandlerService],
})
export class PasswordHandlerModule {}
