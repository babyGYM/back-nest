import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RolService } from './rol.service';
import { CreateRolDto } from './dto/create-rol.dto';
import { UpdateRolDto } from './dto/update-rol.dto';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';


@ApiTags('rol')
@Controller('rol')
export class RolController {
  constructor(private readonly rolService: RolService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo rol' })
  @ApiResponse({ status: 201, description: 'Rol creado exitosamente.' })
  @ApiResponse({ status: 400, description: 'Datos inválidos.' })
  create(@Body() createRolDto: CreateRolDto) {
    return this.rolService.create(createRolDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los roles' })
  @ApiResponse({ status: 200, description: 'Lista de roles obtenida exitosamente.' })
  findAll() {
    return this.rolService.findAll();
  }

  @Get('ById/:id')
  @ApiOperation({ summary: 'Obtener un rol por ID' })
  @ApiParam({ name: 'id', description: 'ID del rol a buscar' })
  @ApiResponse({ status: 200, description: 'Rol encontrado exitosamente.' })
  @ApiResponse({ status: 404, description: 'Rol no encontrado.' })
  findOne(@Param('id') id: string) {
    return this.rolService.findOne(id);
  }

  @Get('ByName/:name')
  @ApiOperation({ summary: 'Obtener un rol por nombre' })
  @ApiParam({ name: 'name', description: 'nombre del rol a buscar' })
  @ApiResponse({ status: 200, description: 'Rol encontrado exitosamente.' })
  @ApiResponse({ status: 404, description: 'Rol no encontrado.' })
  async findByName(@Param('name') name: string) {
    return this.rolService.findByName(name);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar un rol existente' })
  @ApiParam({ name: 'id', description: 'ID del rol a actualizar' })
  @ApiResponse({ status: 200, description: 'Rol actualizado exitosamente.' })
  @ApiResponse({ status: 404, description: 'Rol no encontrado.' })
  @ApiResponse({ status: 400, description: 'Datos inválidos.' })
  update(@Param('id') id: string, @Body() updateRolDto: UpdateRolDto) {
    return this.rolService.update(+id, updateRolDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un rol por ID' })
  @ApiParam({ name: 'id', description: 'ID del rol a eliminar' })
  @ApiResponse({ status: 200, description: 'Rol eliminado exitosamente.' })
  @ApiResponse({ status: 404, description: 'Rol no encontrado.' })
  remove(@Param('id') id: string) {
    return this.rolService.remove(id);
  }
}
