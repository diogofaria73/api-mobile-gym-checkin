
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { PrismaService } from './infrastructure/database/prisma.service'
import { UserModule } from './modules/user/user.module'
import { envSchema } from './configs/environment/env'
import { AuthModule } from './modules/auth/auth.module'
import { AuthenticateController } from './modules/auth/services/authenticate.controller'


@Module({
  imports: [
    AuthModule,
    UserModule,
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),
  ],
  controllers: [AuthenticateController],
  providers: [PrismaService],
})
// eslint-disable-next-line prettier/prettier
export class AppModule { }
