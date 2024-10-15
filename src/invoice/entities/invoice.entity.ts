import { ProductSold } from 'src/product_sold/entities/product_sold.entity';
import { PrimaryGeneratedColumn, Column, Entity, OneToMany } from 'typeorm';

@Entity()
export class Invoice {
  @PrimaryGeneratedColumn()
  invoice_no: number;

  @Column({ type: 'date' })
  date: Date;

  @Column({ type: 'varchar', length: 30 })
  customer: string;

  @Column({ type: 'varchar', length: 30 })
  salesperson: string;

  @Column({ type: 'enum', enum: ['Male', 'Female'] })
  payment_type: string;

  @Column({ type: 'text' })
  notes: string;

  @OneToMany(() => ProductSold, (productSold) => productSold.invoice)
  productSolds: ProductSold[];
}
