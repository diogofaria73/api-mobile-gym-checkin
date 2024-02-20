import { Injectable } from "@nestjs/common";
import { GymRepository } from "../repositories/concrete/GymRepository";
import { CreateGymDto } from "../dtos/create-gym-dto";
import { Gym } from "@prisma/client";
import { UpdateGymDto } from "../dtos/update-gym-dto";

@Injectable()
export class GymService {

  constructor(private readonly gymRepository: GymRepository) { }

  async create(data: CreateGymDto): Promise<Gym | null> {
    const gym = await this.gymRepository.create(data)
    return gym
  }

  async update(data: UpdateGymDto): Promise<Gym> {
    const gym = await this.gymRepository.update(data)
    return gym
  }
  async delete(id: string): Promise<Gym | null> {
    if (id) {
      const gym = await this.gymRepository.delete(id)
      return gym
    }
    return null
  }

  async findOne(id: string): Promise<Gym | null> {
    const gym = await this.gymRepository.findOne(id)
    return gym || null
  }

  async findAll(): Promise<Gym[] | null> {
    const gyms = await this.gymRepository.findAll()

    if (gyms) return gyms
    return null
  }
}