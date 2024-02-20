import {
  Body,
  ConflictException,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { UserService } from './user.service'
import { Prisma } from '@prisma/client'
import { CreateUserDto } from '../dtos/create-user-dto'
import { UpdateUserDto } from '../dtos/update-user-dto'


@ApiTags('Users')
@Controller(`${'/api/'}${process.env.API_VERSION}${'/users'}`)
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post('create')
  async create(@Body() data: CreateUserDto) {
    const user = await this.userService.create(data)

    if (user != null) {
      return user
    } else {
      throw new ConflictException('User already exists')
    }
  }

  @Put('update')
  async update(@Body() data: UpdateUserDto) {
    const user = await this.userService.update(data)
    return user
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const user = await this.userService.delete(id)
    return user
  }

  @Get('all')
  async findAll() {
    const users = await this.userService.findAll()
    return users
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const user = await this.userService.findOne(id)
    return user
  }
}