import { IsString, IsEmail, IsInt, Min, Max, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';  // Importa el decorador ApiProperty

export class AuthUserDto {

  @ApiProperty({ description: 'The email of the user' })  // Descripción del campo en Swagger
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'The password of the user' })  // Descripción del campo en Swagger
  @IsString()
  password: string;

}