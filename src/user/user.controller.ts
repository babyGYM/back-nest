import { Controller, Post, Body, Get, Param, Patch, Delete, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';  // Importa los decoradores de Swagger
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.schema';

@ApiTags('users')  // Agrupa los endpoints bajo la categoría "users"
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new user' })  // Descripción del endpoint
  @ApiResponse({ status: 201, description: 'User created successfully', type: User })  // Respuesta exitosa
  @ApiResponse({ status: 400, description: 'Invalid input' })  // Respuesta de error
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all users' })  // Descripción del endpoint
  @ApiResponse({ status: 200, description: 'List of users', type: [User] })  // Respuesta exitosa
  @ApiResponse({ status: 404, description: 'Users not found' })  // Respuesta de error
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a user by ID' })  // Descripción del endpoint
  @ApiResponse({ status: 200, description: 'User found', type: User })  // Respuesta exitosa
  @ApiResponse({ status: 404, description: 'User not found' })  // Respuesta de error
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Patch('actualizar/:id')
  @ApiOperation({ summary: 'Update a user by ID' })  // Descripción del endpoint
  @ApiResponse({ status: 200, description: 'User updated successfully', type: User })  // Respuesta exitosa
  @ApiResponse({ status: 404, description: 'User not found' })  // Respuesta de error
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @Patch('asignar_rol')
  @ApiOperation({ summary: 'Update a user by ID' })  // Descripción del endpoint
  @ApiResponse({ status: 200, description: 'asignar un rol al usuario', type: User })  // Respuesta exitosa
  @ApiResponse({ status: 404, description: 'User not found' })  // Respuesta de error
  assignRol(@Query('userId') userId: string, @Query('roleId') roleId: string) {
    return this.userService.assignRole(userId, roleId);
  }

  @Patch('asignar_hijo')
  @ApiOperation({ summary: 'Update a user by ID' })  // Descripción del endpoint
  @ApiResponse({ status: 200, description: 'agregar un hijo al usuario', type: User })  // Respuesta exitosa
  @ApiResponse({ status: 404, description: 'User not found' })  // Respuesta de error
  assignHijo(@Query('userId') userId: string, @Query('HijoId') hijoId: string) {
    return this.userService.assignHijo(userId, hijoId);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a user by ID' })  // Descripción del endpoint
  @ApiResponse({ status: 200, description: 'User deleted successfully' })  // Respuesta exitosa
  @ApiResponse({ status: 404, description: 'User not found' })  // Respuesta de error
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
