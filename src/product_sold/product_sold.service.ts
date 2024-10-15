import { Injectable } from '@nestjs/common';
import { CreateProductSoldDto } from './dto/create-product_sold.dto';
import { UpdateProductSoldDto } from './dto/update-product_sold.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductSold } from './entities/product_sold.entity';

@Injectable()
export class ProductSoldService {
  constructor(
    @InjectRepository(ProductSold)
    private readonly productSoldRepository: Repository<ProductSold>,
  ) {}
  async create(
    createProductSoldDto: CreateProductSoldDto,
  ): Promise<ProductSold> {
    const productSoldData =
      await this.productSoldRepository.create(createProductSoldDto);
    console.log(productSoldData);

    return this.productSoldRepository.save(productSoldData);
  }

  async findAll(): Promise<ProductSold[]> {
    return await this.productSoldRepository.find({
      relations: { invoice: true, item: true },
    });
  }

  async findOne(invoice_no: number): Promise<ProductSold[]> {
    return await this.productSoldRepository.findBy({ invoice_no });
  }

  async update(
    invoice_no: number,
    item_id: number,
    updateProductSoldDto: UpdateProductSoldDto,
  ) {
    console.log(invoice_no, item_id, updateProductSoldDto);

    // const existData = await this.findOne();
    return;
  }

  remove(id: number) {
    console.log(id);
  }
}
