import { Test, TestingModule } from '@nestjs/testing';
import { ProductSoldController } from './product_sold.controller';
import { ProductSoldService } from './product_sold.service';

describe('ProductSoldController', () => {
  let controller: ProductSoldController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductSoldController],
      providers: [ProductSoldService],
    }).compile();

    controller = module.get<ProductSoldController>(ProductSoldController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
