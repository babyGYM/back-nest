import { Injectable } from '@nestjs/common';
import { CreateRolDto } from './dto/create-rol.dto';
import { UpdateRolDto } from './dto/update-rol.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Rol } from './entities/rol.schema';
import { User } from '../user/entities/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class RolService {

  constructor(@InjectModel(Rol.name) private rolModel: Model<Rol>) {}

  create(createRolDto: CreateRolDto) {
    const newRol = new this.rolModel(createRolDto);
    return newRol.save();
  }

  async findAll(): Promise<Rol[]> {
    return this.rolModel.find().exec();
  }

  async findOne(id: string): Promise<Rol> {
    return this.rolModel.findById(id).exec();
  }
  
  async findByName(name: string): Promise<Rol> {
    return this.rolModel.findOne( { name: name } ).exec();
  }

  async update(id: number, updateRolDto: UpdateRolDto) {
    return this.rolModel.findByIdAndUpdate(id, updateRolDto, { new: true }).exec();
  }

  async remove(id: string): Promise<Rol> {
    return this.rolModel.findByIdAndDelete(id).exec();  // Elimina el usuario por su ID
  }
}
