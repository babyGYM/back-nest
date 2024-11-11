import { Test, TestingModule } from '@nestjs/testing';
import { HijoController } from './hijo.controller';
import { HijoService } from './hijo.service';

describe('HijoController', () => {
  let controller: HijoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HijoController],
      providers: [HijoService],
    }).compile();

    controller = module.get<HijoController>(HijoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
