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
import { GymService } from './gym.service'
import { UpdateGymDto } from '@/modules/gym/dtos/update-gym-dto'
import { CreateGymDto } from '@/modules/gym/dtos/create-gym-dto'



@ApiTags('Gyms')
@Controller(`${'/api/'}${process.env.API_VERSION}${'/users'}`)
export class GymController {
  constructor(private readonly gymService: GymService) { }

  @Post('create')
  async create(@Body() data: CreateGymDto) {
    const gym = await this.gymService.create(data)

    if (gym != null) {
      return gym
    } else {
      throw new ConflictException('Gym already exists')
    }
  }

  @Put('update')
  async update(@Body() data: UpdateGymDto) {
    const gym = await this.gymService.update(data)
    return gym
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const gym = await this.gymService.delete(id)
    return gym
  }

  @Get('all')
  async findAll() {
    const gyms = await this.gymService.findAll()
    return gyms
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const gym = await this.gymService.findOne(id)
    return gym
  }
}