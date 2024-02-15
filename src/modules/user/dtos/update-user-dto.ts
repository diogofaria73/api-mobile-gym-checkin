import { ApiProperty, ApiTags } from '@nestjs/swagger'
import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
  Length,
} from 'class-validator'

@ApiTags('User')
export class UpdateUserDto {

  @ApiProperty({ example: 'UUID' })
  @IsNotEmpty()
  @IsString()
  id: string

  @ApiProperty({ example: 'José Dorival da Silva' })
  @IsNotEmpty()
  @IsString()
  name: string

  @ApiProperty({ example: 'jose.dorival@gmail.com' })
  @IsNotEmpty()
  @IsEmail()
  email: string

  @ApiProperty({ example: true })
  @IsNotEmpty()
  @IsBoolean()
  is_active: boolean

  @ApiProperty({ example: 'fadababaca@123' })
  @IsNotEmpty()
  @IsStrongPassword()
  password: string
}