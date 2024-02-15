import { Injectable } from "@nestjs/common";
import { IUserRepository } from "../abstract/Iuser-repository";
import { User } from "@prisma/client";
import { PrismaService } from "src/infrastructure/database/prisma.service";
import { CreateUserDto } from "../../dtos/create-user-dto";
import { UpdateUserDto } from "../../dtos/update-user-dto";

@Injectable()
export class UserRepository implements IUserRepository<User> {

  constructor(private readonly prisma: PrismaService) { }

  async create(data: CreateUserDto): Promise<User | null> {
    if (data) {
      const user = await this.prisma.user.create({ data })
      return user
    }
    return null
  }
  async update(data: UpdateUserDto): Promise<User | null> {
    if (data) {
      const user = await this.prisma.user.update({
        where: {
          id: data.id,
        },
        data,
      })
      return user
    }
    return null
  }
  async delete(id: string): Promise<User | null> {
    if (id) {
      const user = await this.prisma.user.delete({ where: { id } })
      return user
    }
    return null
  }
  async findEnabledUsers(): Promise<User[] | null> {
    const users = await this.prisma.user.findMany({
      where: {
        is_active: true
      }
    })
    return users
  }
  async findDisabledUsers(): Promise<User[] | null> {
    const users = await this.prisma.user.findMany({
      where: {
        is_active: false
      }
    })
    return users
  }
  async findOne(id: string): Promise<User | null> {
    const user = await this.prisma.user.findFirst({
      where: {
        id
      }
    })
    return user
  }
  async findAll(): Promise<User[] | null> {
    const users = await this.prisma.user.findMany()
    return users
  }
}