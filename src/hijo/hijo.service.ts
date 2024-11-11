import { Injectable } from '@nestjs/common';
import { CreateHijoDto } from './dto/create-hijo.dto';
import { UpdateHijoDto } from './dto/update-hijo.dto';

@Injectable()
export class HijoService {
  create(createHijoDto: CreateHijoDto) {
    return 'This action adds a new hijo';
  }

  findAll() {
    return `This action returns all hijo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hijo`;
  }

  update(id: number, updateHijoDto: UpdateHijoDto) {
    return `This action updates a #${id} hijo`;
  }

  remove(id: number) {
    return `This action removes a #${id} hijo`;
  }
}
