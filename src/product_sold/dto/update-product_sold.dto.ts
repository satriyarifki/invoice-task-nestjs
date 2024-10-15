import { PartialType } from '@nestjs/mapped-types';
import { CreateProductSoldDto } from './create-product_sold.dto';

export class UpdateProductSoldDto extends PartialType(CreateProductSoldDto) {}
