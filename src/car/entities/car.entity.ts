import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('car')
export class Car {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  modelo: string;

  @Column('text')
  color: string;

  @Column('text')
  patente: string;
}
