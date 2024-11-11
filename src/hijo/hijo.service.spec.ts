import { Test, TestingModule } from '@nestjs/testing';
import { HijoService } from './hijo.service';

describe('HijoService', () => {
  let service: HijoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HijoService],
    }).compile();

    service = module.get<HijoService>(HijoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
