import { Injectable } from "@nestjs/common";
import { UserRepository } from "../repositories/concrete/UserRepository";
import { CreateUserDto } from "../dtos/create-user-dto";
import { UpdateUserDto } from "../dtos/update-user-dto";
import { User } from "@prisma/client";
import { EncryptKeys } from "src/utils/security/encrypt-key-utils";

@Injectable()
export class UserService {

  constructor(private readonly userRepository: UserRepository) { }

  async create(data: CreateUserDto): Promise<User | null> {
    if (data) {
      data.password = await EncryptKeys.hash(data.password)
      const user = await this.userRepository.create(data)
      return user
    }
    return null
  }

  async update(data: UpdateUserDto): Promise<User | null> {
    if (data) {
      const user = await this.userRepository.update(data)
      return user
    }
    return null
  }

  async delete(id: string): Promise<User | null> {
    if (id) {
      const user = await this.userRepository.delete(id)
      return user
    }
    return null
  }

  async findOne(id: string): Promise<User | null> {
    const user = await this.userRepository.findOne(id)
    return user || null
  }

  async findAll(): Promise<User[] | null> {
    const users = await this.userRepository.findAll()

    if (users) return users
    return null
  }

}