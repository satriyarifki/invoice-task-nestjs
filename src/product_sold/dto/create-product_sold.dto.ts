import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateProductSoldDto {
  @IsNotEmpty()
  @IsNumber()
  invoice_no: number;

  @IsNotEmpty()
  @IsNumber()
  item_id: number;

  @IsNotEmpty()
  @IsNumber()
  quantity: number;

  @IsNotEmpty()
  @IsNumber()
  total_cogs: number;

  @IsNotEmpty()
  @IsNumber()
  total_price: number;
}
