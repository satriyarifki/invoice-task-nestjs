import { ProductSold } from 'src/product_sold/entities/product_sold.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Item {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 20 })
  item_name: string;

  @Column({ type: 'int4' })
  stock: number;

  @Column({ type: 'varchar' })
  item_pict: string;

  @Column({ type: 'int4' })
  item_price: number;

  @OneToMany(() => ProductSold, (productSold) => productSold.item)
  productSolds: ProductSold[];
}
