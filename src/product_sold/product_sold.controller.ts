import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProductSoldService } from './product_sold.service';
import { CreateProductSoldDto } from './dto/create-product_sold.dto';
import { UpdateProductSoldDto } from './dto/update-product_sold.dto';

@Controller('product-sold')
export class ProductSoldController {
  constructor(private readonly productSoldService: ProductSoldService) {}

  @Post()
  create(@Body() createProductSoldDto: CreateProductSoldDto) {
    return this.productSoldService.create(createProductSoldDto);
  }

  @Get()
  findAll() {
    return this.productSoldService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productSoldService.findOne(+id);
  }

  @Patch(':id/:item')
  update(
    @Param('id') id: string,
    @Param('item') item: string,
    @Body() updateProductSoldDto: UpdateProductSoldDto,
  ) {
    return this.productSoldService.update(+id, +item, updateProductSoldDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productSoldService.remove(+id);
  }
}
