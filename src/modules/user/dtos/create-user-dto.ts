import { ApiProperty, ApiTags } from '@nestjs/swagger'
import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
  Length,
} from 'class-validator'

@ApiTags('Users')
export class CreateUserDto {

  @ApiProperty({ example: 'Lindomir Castilho' })
  @IsNotEmpty()
  @IsString()
  name: string

  @ApiProperty({ example: 'lindomir.belini@gmail.com' })
  @IsNotEmpty()
  @IsEmail()
  email: string

  @ApiProperty({ example: true })
  @IsNotEmpty()
  @IsBoolean()
  is_active: boolean

  @ApiProperty({ example: 'L@#2010992aaa' })
  @IsNotEmpty()
  @IsString()
  @IsStrongPassword()
  password: string
}