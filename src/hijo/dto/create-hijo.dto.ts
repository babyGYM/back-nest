import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateHijoDto {
  @ApiProperty({ description: 'rango de edad del hijo' })  // Descripción del campo en Swagger
  @IsString()
  range: string;
}
