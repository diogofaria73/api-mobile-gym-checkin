import { Module } from "@nestjs/common";
import { GymController } from "./services/gym.controller";
import { PrismaService } from "@/infrastructure/database/prisma.service";
import { GymService } from "./services/gym.service";
import { GymRepository } from "./repositories/concrete/GymRepository";


@Module({
  controllers: [GymController],
  providers: [PrismaService, GymService, GymRepository]
})

export class GymMOdule { }
