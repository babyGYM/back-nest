import { Module } from '@nestjs/common';
import { HijoService } from './hijo.service';
import { HijoController } from './hijo.controller';

@Module({
  controllers: [HijoController],
  providers: [HijoService],
})
export class HijoModule {}
