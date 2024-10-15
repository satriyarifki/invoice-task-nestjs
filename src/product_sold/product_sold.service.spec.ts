import { Test, TestingModule } from '@nestjs/testing';
import { ProductSoldService } from './product_sold.service';

describe('ProductSoldService', () => {
  let service: ProductSoldService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductSoldService],
    }).compile();

    service = module.get<ProductSoldService>(ProductSoldService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
