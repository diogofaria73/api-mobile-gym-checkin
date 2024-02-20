import { Gym } from "@prisma/client";
import { IGymRepository } from "../abstract/IGym-Repository";
import { PrismaService } from "src/infrastructure/database/prisma.service";
import { CreateGymDto } from "../../dtos/create-gym-dto";
import { UpdateGymDto } from "../../dtos/update-gym-dto";

export class GymRepository implements IGymRepository<Gym>{

  constructor(private readonly prisma: PrismaService) { }

  async create(data: CreateGymDto): Promise<Gym | null> {
    if (data) {
      const gym = await this.prisma.gym.create({ data })
      return gym
    }
    return null
  }

  async update(data: UpdateGymDto): Promise<Gym> {
    if (data) {
      const gym = await this.prisma.gym.update({
        where: {
          id: String(data.id),
        },
        data,
      })
      return gym
    }
    return null
  }

  async delete(id: string): Promise<Gym> {
    if (id) {
      const user = await this.prisma.gym.delete({ where: { id } })
      return user
    }
    return null
  }



  async findEnabledGym(): Promise<Gym[]> {
    const gyms = await this.prisma.gym.findMany({
      where: {
        is_active: true
      }
    })
    return gyms;
  }
  async findDisabledGym(): Promise<Gym[]> {
    const gyms = await this.prisma.gym.findMany({
      where: {
        is_active: false
      }
    })
    return gyms;
  }
  async findOne(id: string): Promise<Gym> {
    const gym = await this.prisma.gym.findUnique({
      where: {
        id
      }
    })

    return gym
  }
  async findAll(): Promise<Gym[]> {
    const gyms = await this.prisma.gym.findMany()
    return gyms
  }
}
