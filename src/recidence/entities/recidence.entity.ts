import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('recidence')
export class Recidence {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  pais: string;

  @Column('text')
  provincia: string;

  @Column('text')
  localidad: string;
}
