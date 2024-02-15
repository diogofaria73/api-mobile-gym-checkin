
import { Module } from '@nestjs/common'
import { UserService } from './services/user.service'
import { UserController } from './services/user.controller'
import { UserRepository } from './repositories/concrete/UserRepository'
import { PrismaService } from 'src/infrastructure/database/prisma.service'

@Module({
  controllers: [UserController],
  providers: [PrismaService, UserService, UserRepository],
})
export class UserModule { }