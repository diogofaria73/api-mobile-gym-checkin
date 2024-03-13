
import { envSchema } from '@/configs/environment/env'
import { hash } from 'bcryptjs'

export class EncryptKeys {
  static async hash(password: string) {

    return await hash(password, Number(envSchema.shape.PASSWORD_SALT_COMPLEXITY), //TODO: Running a work test to validate if this logic is working
      //password, Number(envSchema.shape.PASSWORD_SALT_COMPLEXITY)
      // Number(process.env.PASSWORD_SALT_COMPLEXITY),``∏
    ) //: Teste
  }
}
