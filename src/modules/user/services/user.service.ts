import { Injectable } from "@nestjs/common";
import { UserRepository } from "../repositories/concrete/UserRepository";
import { CreateUserDto } from "../dtos/create-user-dto";
import { UpdateUserDto } from "../dtos/update-user-dto";
import { Prisma, User } from "@prisma/client";
import { EncryptKeys } from "src/utils/security/encrypt-key-utils";

@Injectable()
export class UserService {

  constructor(private readonly userRepository: UserRepository) { }

  async create(data: Prisma.UserCreateInput): Promise<User | null> {
    if (data) {
      data.password = await EncryptKeys.hash(data.password)
      const user = await this.userRepository.create(data)
      return user
    }
    return null
  }

  async update(data: Prisma.UserUpdateInput): Promise<User | null> {
    if (data) {
      //check if password has changed and need to be encrypted again
      //recovery encrypted data from database
      const { password } = await this.findOne(String(data.id))

      // encrypt new password 
      const newEncryptedPassword = await EncryptKeys.hash(String(data.password))
      // compare with new password is equal to original encrypted password
      if (newEncryptedPassword === password) {
        // if yes, save new infos
        const user = await this.userRepository.update(data)
        return user
      }
      // if not, update data password field with encrypted key and update register 
      data.password = newEncryptedPassword
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