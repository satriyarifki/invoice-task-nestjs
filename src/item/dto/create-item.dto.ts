import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateItemDto {
  @IsNotEmpty()
  @IsString()
  item_name: string;

  @IsNotEmpty()
  @IsNumber()
  stock: number;

  @IsString()
  item_pict: string;

  @IsNotEmpty()
  @IsNumber()
  item_price: number;
}
