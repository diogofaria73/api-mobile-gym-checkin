import { ApiProperty, ApiTags } from '@nestjs/swagger'
import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
  IsUUID,
  Length,
} from 'class-validator'

@ApiTags('Gyms')
export class UpdateGymDto {

  @ApiProperty({ example: 'UUID' })
  @IsNotEmpty()
  @IsUUID()
  id: string

  @ApiProperty({ example: 'Academia do Romerinho' })
  @IsNotEmpty()
  @IsString()
  name: string

  @ApiProperty({ example: 'romerinho@gym.com.br' })
  @IsNotEmpty()
  @IsEmail()
  email: string

  @ApiProperty({ example: true })
  @IsNotEmpty()
  @IsBoolean()
  is_active: boolean
}