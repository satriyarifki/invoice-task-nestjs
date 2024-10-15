import { IsNotEmpty, IsString } from 'class-validator';

export class CreateInvoiceDto {
  @IsNotEmpty()
  date: Date;

  @IsNotEmpty()
  @IsString()
  customer: string;

  @IsNotEmpty()
  @IsString()
  salesperson: string;

  @IsNotEmpty()
  @IsString()
  payment_type: string;

  @IsNotEmpty()
  @IsString()
  notes: string;
}
