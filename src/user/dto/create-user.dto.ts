import { IsNumber, IsString } from 'class-validator';
import { Car } from '../../car/entities/car.entity';
import { Language } from '../../language/entities/language.entity';
import { Recidence } from '../../recidence/entities/recidence.entity';
import { TypeUser } from '../../type_user/entities/type_user.entity';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsString()
  lastname: string;

  @IsNumber()
  dni: number;

  @IsString()
  direccion: string;

  recidence: Recidence;

  car: Car;

  type_user: TypeUser;

  language: Language;

  create_at: Date;

  delete_at: Date;
}
