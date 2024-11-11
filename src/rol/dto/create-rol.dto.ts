import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateRolDto {
  @ApiProperty({ description: 'The name of rol' })  // Descripción del campo en Swagger
  @IsString()
  name: string;
}
