import { Column, CreateDateColumn, Entity } from 'typeorm';
import { BaseEntity } from './baseEntity';

@Entity()
export class Product extends BaseEntity {
  @Column({ type: 'real' })
  price: number;

  @Column()
  stock: number;

  @Column()
  name: string;

  @CreateDateColumn()
  validity: Date;
}
