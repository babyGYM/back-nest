import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ContenidoService } from './contenido.service';
import { CreateContenidoDto } from './dto/create-contenido.dto';
import { UpdateContenidoDto } from './dto/update-contenido.dto';

@Controller('contenido')
export class ContenidoController {
  constructor(private readonly contenidoService: ContenidoService) {}

  @Post()
  create(@Body() createContenidoDto: CreateContenidoDto) {
    return this.contenidoService.create(createContenidoDto);
  }

  @Get()
  findAll() {
    return this.contenidoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contenidoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateContenidoDto: UpdateContenidoDto) {
    return this.contenidoService.update(+id, updateContenidoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contenidoService.remove(+id);
  }
}
