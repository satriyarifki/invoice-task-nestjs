import { Module } from '@nestjs/common';
import { ProductSoldService } from './product_sold.service';
import { ProductSoldController } from './product_sold.controller';
import { ProductSold } from './entities/product_sold.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ProductSold])],
  controllers: [ProductSoldController],
  providers: [ProductSoldService],
})
export class ProductSoldModule {}
