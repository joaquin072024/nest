import { IsNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsString()
  lastname: string;

  @IsNumber()
  dni: number;

  @IsString()
  direccion: string;

  delete_at: Date;
}
