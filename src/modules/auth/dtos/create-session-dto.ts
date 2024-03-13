import { ApiProperty, ApiTags } from '@nestjs/swagger'
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
} from 'class-validator'

@ApiTags('Login')
export class CreateSession {

  name: string

  @ApiProperty({ example: 'lindomir.belini@gmail.com' })
  @IsNotEmpty()
  @IsEmail()
  email: string

  @ApiProperty({ example: 'L@#2010992aaa' })
  @IsNotEmpty()
  @IsString()
  @IsStrongPassword()
  password: string
}