import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Dates } from '../../dates/dates.entity';
import { User } from '../../user/entities/user.entity';

@Entity('recidence')
export class Recidence extends Dates {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  pais: string;

  @Column('text')
  provincia: string;

  @Column('text')
  localidad: string;

  @OneToMany(() => User, (user) => user.recidence)
  user: User[];
}
