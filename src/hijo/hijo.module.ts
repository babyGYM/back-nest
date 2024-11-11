import { Module } from '@nestjs/common';
import { HijoService } from './hijo.service';
import { HijoController } from './hijo.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Hijo, HijoSchema } from './entities/hijo.schema';

@Module({
  controllers: [HijoController],
  providers: [HijoService],
  imports: [
    MongooseModule.forFeature([{ name: Hijo.name, schema: HijoSchema }])
  ]
})
export class HijoModule {}
