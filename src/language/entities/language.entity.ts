import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('language')
export class Language {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  decription: string;
}
