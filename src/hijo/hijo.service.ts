import { Injectable } from '@nestjs/common';
import { CreateHijoDto } from './dto/create-hijo.dto';
import { UpdateHijoDto } from './dto/update-hijo.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Hijo } from './entities/hijo.schema';
import { Model } from 'mongoose';
import { User } from '../user/entities/user.entity';

@Injectable()
export class HijoService {

  constructor(@InjectModel(Hijo.name) private hijoModel: Model<Hijo>) {
  }

  create(createHijoDto: CreateHijoDto) {
    const newHijo = new this.hijoModel(createHijoDto);
    return newHijo.save();
  }

  async findAll() : Promise<Hijo[]> {
    return this.hijoModel.find().exec();
  }

  async findOne(id: string): Promise<Hijo> {
    return this.hijoModel.findById(id).exec();
  }

  async update(id: string, updateHijoDto: UpdateHijoDto): Promise<Hijo> {
    return this.hijoModel.findByIdAndUpdate(id, updateHijoDto, { new: true }).exec();
  }

  async remove(id: string): Promise<Hijo> {
    return this.hijoModel.findByIdAndDelete(id).exec();
  }
}
