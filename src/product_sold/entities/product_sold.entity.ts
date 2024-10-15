import { Invoice } from 'src/invoice/entities/invoice.entity';
import { Item } from 'src/item/entities/item.entity';
import { Column, Entity, ManyToOne, JoinColumn, PrimaryColumn } from 'typeorm';

@Entity()
export class ProductSold {
  @PrimaryColumn({
    type: 'int4',
    primary: false,
    insert: false,
    select: false,
    update: false,
    unique: false,
  })
  id: never;

  @Column({ type: 'int4' })
  invoice_no: number;

  @ManyToOne(() => Invoice, (invoice) => invoice.productSolds)
  @JoinColumn({ name: 'invoice_no' })
  invoice: Invoice;

  @Column({ type: 'int4' })
  item_id: number;

  @ManyToOne(() => Item, (item) => item.productSolds)
  @JoinColumn({ name: 'item_id' })
  item: Item;

  @Column({ type: 'int4' })
  quantity: number;

  @Column({ type: 'int4' })
  total_cogs: number;

  @Column({ type: 'int4' })
  total_price: number;
}
