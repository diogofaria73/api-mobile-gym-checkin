
import { hash } from 'bcryptjs'
import { envSchema } from 'src/configs/env/env'

export class EncryptKeys {
  static async hash(password: string) {

    return await hash(password, Number(process.env.PASSWORD_SALT_COMPLEXITY),
      //password, Number(envSchema.shape.PASSWORD_SALT_COMPLEXITY)
      // Number(process.env.PASSWORD_SALT_COMPLEXITY),``∏
    )
  }
}
