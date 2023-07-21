import { compare, hash } from 'bcryptjs';

export class Password {
  /**
   * hashes a password
   * @param password the password you want to hash
   */
  static hash(password: string): Promise<string> {
    return hash(password, 10);
  }

  /**
   * true, if the plain-text password is the same as
   * the hashed one
   *
   * false, otherwise
   * @param password the password in plain text
   * @param hashed_password the hashed password
   */
  static isCorrectPassword(
    password: string,
    hashed_password: string,
  ): Promise<boolean> {
    return compare(password, hashed_password);
  }
}
