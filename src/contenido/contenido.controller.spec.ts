import { Test, TestingModule } from '@nestjs/testing';
import { ContenidoController } from './contenido.controller';
import { ContenidoService } from './contenido.service';

describe('ContenidoController', () => {
  let controller: ContenidoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContenidoController],
      providers: [ContenidoService],
    }).compile();

    controller = module.get<ContenidoController>(ContenidoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
