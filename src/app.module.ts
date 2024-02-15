
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { envSchema } from './configs/env/env'
import { PrismaService } from './infrastructure/database/prisma.service'
import { UserModule } from './modules/user/user.module'


@Module({
  imports: [
    UserModule,
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),
  ],
  controllers: [],
  providers: [PrismaService],
})
// eslint-disable-next-line prettier/prettier
export class AppModule { }