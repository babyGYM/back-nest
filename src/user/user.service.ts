import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './entities/user.schema';  // Importa el esquema User
import { CreateUserDto } from './dto/create-user.dto';  // DTO para crear un usuario
import { UpdateUserDto } from './dto/update-user.dto';  // DTO para actualizar un usuario

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  // Crear un nuevo usuario
  async create(createUserDto: CreateUserDto): Promise<User> {
    const newUser = new this.userModel(createUserDto);
    return newUser.save();  // Guarda el nuevo usuario en la base de datos
  }

  // Obtener todos los usuarios
  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();  // Devuelve todos los usuarios
  }

  // Obtener un usuario por su ID
  async findOne(id: string): Promise<User> {
    return this.userModel.findById(id).exec();  // Busca el usuario por su ID
  }

  // Actualizar un usuario
  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    return this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true }).exec();  // Actualiza el usuario y retorna el usuario actualizado
  }

  // Eliminar un usuario
  async remove(id: string): Promise<User> {
    return this.userModel.findByIdAndDelete(id).exec();  // Elimina el usuario por su ID
  }
}

