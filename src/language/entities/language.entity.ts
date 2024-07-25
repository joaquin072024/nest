import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Dates } from '../../dates/dates.entity';
import { User } from '../../user/entities/user.entity';

@Entity('language')
export class Language extends Dates {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  decription: string;

  @OneToMany(() => User, (user) => user.language)
  language: User[];
}
