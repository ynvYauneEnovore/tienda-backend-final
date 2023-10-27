import { Test, TestingModule } from '@nestjs/testing';
import { CategoriaProductosController } from './categoria-productos.controller';
import { CategoriaProductosService } from './categoria-productos.service';

describe('CategoriaProductosController', () => {
  let controller: CategoriaProductosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoriaProductosController],
      providers: [CategoriaProductosService],
    }).compile();

    controller = module.get<CategoriaProductosController>(CategoriaProductosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
