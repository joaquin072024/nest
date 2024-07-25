import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Car } from '../../car/entities/car.entity';
import { Dates } from '../../dates/dates.entity';
import { Language } from '../../language/entities/language.entity';
import { Recidence } from '../../recidence/entities/recidence.entity';
import { TypeUser } from '../../type_user/entities/type_user.entity';

@Entity('user')
export class User extends Dates {
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

  @ManyToOne(() => Recidence)
  recidence: Recidence;

  @ManyToOne(() => TypeUser)
  type_user: TypeUser;

  @ManyToOne(() => Language)
  language: Language;

  @ManyToOne(() => Car)
  car: Car;
}
