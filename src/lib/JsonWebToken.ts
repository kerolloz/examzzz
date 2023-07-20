import jwt from 'jsonwebtoken';
import { jwtSecretKeyEnvVar as JWT_SECRET_KEY } from '../config';

export class JsonWebToken {
  static encode(payload: Record<string, unknown>, keySign = ''): string {
    return jwt.sign(payload, JWT_SECRET_KEY + keySign);
  }

  static decode(token: string): unknown {
    try {
      return jwt.decode(token);
    } catch (_) {
      return null;
    }
  }

  static verify(token: string, keySign: string): boolean {
    try {
      jwt.verify(token, JWT_SECRET_KEY + keySign);
      return true;
    } catch (_) {
      return false;
    }
  }
}
