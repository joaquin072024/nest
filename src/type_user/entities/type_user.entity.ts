import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Dates } from '../../dates/dates.entity';
import { User } from '../../user/entities/user.entity';

@Entity('type_user')
export class TypeUser extends Dates {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  description: string;

  @OneToMany(() => User, (user) => user.type_user)
  user: User[];
}
