import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HijoService } from './hijo.service';
import { CreateHijoDto } from './dto/create-hijo.dto';
import { UpdateHijoDto } from './dto/update-hijo.dto';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Hijo } from './entities/hijo.schema';

@ApiTags('Hijo') // Etiqueta general para el controlador
@Controller('hijo')
export class HijoController {
  constructor(private readonly hijoService: HijoService) {}

  @Post()
  @ApiOperation({ summary: 'Crea un nuevo hijo' })
  @ApiBody({ type: CreateHijoDto })
  @ApiResponse({ status: 201, description: 'Hijo creado exitosamente', type: Hijo })
  create(@Body() createHijoDto: CreateHijoDto) {
    return this.hijoService.create(createHijoDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtiene todos los hijos' })
  @ApiResponse({ status: 200, description: 'Lista de todos los hijos', type: [Hijo] })
  findAll() {
    return this.hijoService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtiene un hijo por su ID' })
  @ApiParam({ name: 'id', description: 'ID del hijo a buscar', required: true })
  @ApiResponse({ status: 200, description: 'Hijo encontrado', type: Hijo })
  @ApiResponse({ status: 404, description: 'Hijo no encontrado' })
  findOne(@Param('id') id: string) {
    return this.hijoService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualiza un hijo por su ID' })
  @ApiParam({ name: 'id', description: 'ID del hijo a actualizar', required: true })
  @ApiBody({ type: UpdateHijoDto })
  @ApiResponse({ status: 200, description: 'Hijo actualizado', type: Hijo })
  @ApiResponse({ status: 404, description: 'Hijo no encontrado' })
  update(@Param('id') id: string, @Body() updateHijoDto: UpdateHijoDto) {
    return this.hijoService.update(id, updateHijoDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Elimina un hijo por su ID' })
  @ApiParam({ name: 'id', description: 'ID del hijo a eliminar', required: true })
  @ApiResponse({ status: 200, description: 'Hijo eliminado exitosamente' })
  @ApiResponse({ status: 404, description: 'Hijo no encontrado' })
  remove(@Param('id') id: string) {
    return this.hijoService.remove(id);
  }
}
