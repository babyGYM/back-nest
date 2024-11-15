import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { User } from './entities/user.schema';  // Importa el esquema User
import { CreateUserDto } from './dto/create-user.dto';  // DTO para crear un usuario
import { UpdateUserDto } from './dto/update-user.dto';
import { Rol } from '../rol/entities/rol.schema';
import { Hijo } from '../hijo/entities/hijo.schema';
import { AuthUserDto } from './dto/auth-user.dto';  // DTO para actualizar un usuario
import * as bcrypt from "bcryptjs";

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    @InjectModel(Rol.name) private rolModel: Model<Rol>,
    @InjectModel(Hijo.name) private hijoModel: Model<Hijo>,
  ) {}

  // Crear un nuevo usuario
  async create(user: CreateUserDto): Promise<User> {
    const newUser = new this.userModel(user);
    return newUser.save();  // Guarda el nuevo usuario en la base de datos
  }

  async auth(Auth: AuthUserDto){
    const user = await  this.findByEmail(Auth.email);

    if (!user){
      throw new NotFoundException('Not Found');
    }

    const isMatch = await bcrypt.compare(Auth.password, user.password);
    if (!isMatch) {
      return null;  // Si las contraseñas no coinciden
    }

    const { password: userPassword, ...result } = user.toObject();  // Excluir la contraseña del resultado
    return result;
  }

  // Obtener todos los usuarios
  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();  // Devuelve todos los usuarios
  }


  async findByEmail(email: string): Promise<User> {
    return this.userModel.findOne({email}).exec();
  }

  // Obtener un usuario por su ID
  async findOne(id: string): Promise<any> {
    return this.userModel.aggregate([
      { $match: { _id: new Types.ObjectId(id) } },
      {
        $lookup: {
          from: 'rol',
          localField: 'Rol',
          foreignField: '_id',
          as: 'Rol',
        },
      },
      {
        $lookup: {
          from: 'hijo',
          localField: 'Hijos',
          foreignField: '_id',
          as: 'Hijos',
        },
      },
    ]);
  }

  // Actualizar un usuario
  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    return this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true }).exec();  // Actualiza el usuario y retorna el usuario actualizado
  }

  async assignRole(userId: string, roleId: string) : Promise<User> {
    const roleExists = await this.rolModel.exists({_id: roleId});

    if (!roleExists) {
      throw new HttpException('Rol no encontrado', HttpStatus.NOT_FOUND);
    }

    const updatedUser = await this.userModel.findByIdAndUpdate(
      userId,
      { Rol: new Types.ObjectId(roleId) },
      { new: true }
    );

    if (!updatedUser) {
      throw new NotFoundException(`Usuario con  id ${userId} no encontrado`);
    }

    return updatedUser;
  }

  async assignHijo(userId: string, hijoId: string ): Promise<User> {
    const hijoExists = await this.hijoModel.exists({_id: hijoId});

    if (!hijoExists) {
      throw new HttpException('Hijo no se encuentra', HttpStatus.NOT_FOUND);
    }

    const updatedUser = await this.userModel.findByIdAndUpdate(
      userId,
      { $push: { Hijos: new Types.ObjectId(hijoId) } }, // Añadir un nuevo rol al array
      { new: true }
    );

    if (!updatedUser) {
      throw new NotFoundException(`Usuario con id ${userId} no encontrado`);
    }

    return updatedUser
  }

  // Eliminar un usuario
  async remove(id: string): Promise<User> {
    return this.userModel.findByIdAndDelete(id).exec();  // Elimina el usuario por su ID
  }

}

