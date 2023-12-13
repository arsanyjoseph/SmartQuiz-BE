import { Injectable } from "@nestjs/common";
import * as argon from "argon2";
import { randomBytes } from "crypto";

@Injectable()
export class PasswordHandlerService {
  private generateSalt() {
    return randomBytes(16);
  }
  async hashPassword(password: string) {
    return await argon.hash(password, { salt: this.generateSalt() });
  }
  async verifyPassword(hash: string, password: string) {
    return await argon.verify(hash, password);
  }
}
