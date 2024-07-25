import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Brand } from '../../brand/entities/brand.entity';
import { Dates } from '../../dates/dates.entity';
import { User } from '../../user/entities/user.entity';

@Entity('car')
export class Car extends Dates {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  modelo: string;

  @Column('text')
  color: string;

  @Column('text')
  patente: string;

  @OneToMany(() => User, (user) => user.car)
  user: User[];

  @ManyToOne(() => Brand)
  brand: Brand;
}
