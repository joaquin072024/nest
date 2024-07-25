import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Car } from '../../car/entities/car.entity';
import { Dates } from '../../dates/dates.entity';

@Entity('brand')
export class Brand extends Dates {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  description: string;

  @OneToMany(() => Car, (car) => car.brand)
  car: Car[];
}
