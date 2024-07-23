import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('type_user')
export class TypeUser {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  description: string;
}
