// @ts-ignore
import { IsString, IsEmail, IsInt, Min, Max, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';  // Importa el decorador ApiProperty

export class CreateUserDto {
  @ApiProperty({ description: 'The name of the user' })  // Descripción del campo en Swagger
  @IsString()
  name: string;

  @ApiProperty({ description: 'The email of the user' })  // Descripción del campo en Swagger
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'The password of the user' })  // Descripción del campo en Swagger
  @IsString()
  password: string;

  @ApiProperty({ description: 'The age of the user' })  // Descripción del campo en Swagger
  @IsInt()
  @Min(18)
  @Max(100)
  age: number;

  @ApiProperty({ description: 'The creation date of the user', required: false })
  @IsOptional()
  createdAt?: Date;

  @ApiProperty({ description: 'The update date of the user', required: false })
  @IsOptional()
  updatedAt?: Date;
}
