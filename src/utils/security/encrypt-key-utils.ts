
import { hash } from 'bcryptjs'

export class EncryptKeys {
  static async hash(password: string) {

    return await hash(
      password,
      Number(process.env.PASSWORD_SALT_COMPLEXITY),
    )
  }
}