import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InvoiceModule } from './invoice/invoice.module';
import { ConfigModule } from '@nestjs/config';
import { Invoice } from './invoice/entities/invoice.entity';
import { ProductSoldModule } from './product_sold/product_sold.module';
import { ItemModule } from './item/item.module';
import { Item } from './item/entities/item.entity';
import { ProductSold } from './product_sold/entities/product_sold.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.POSTGRES_PORT),
      password: process.env.POSTGRES_PASSWORD,
      username: process.env.POSTGRES_USER,
      entities: [Invoice, Item, ProductSold],
      database: process.env.POSTGRES_DATABASE,
      synchronize: false,
      logging: true,
      extra: {
        options: '-c timezone=Asia/Jakarta',
      },
    }),
    InvoiceModule,
    ProductSoldModule,
    ItemModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
