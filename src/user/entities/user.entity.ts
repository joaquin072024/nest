import { Column, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  name: string;

  @Column('text')
  lastname: string;

  @Column('int')
  dni: number;

  @Column('text')
  direccion: string;

  @DeleteDateColumn()
  delete_at: Date;
}
