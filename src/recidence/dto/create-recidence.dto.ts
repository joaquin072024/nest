import { IsString } from 'class-validator';

export class CreateRecidenceDto {
  @IsString()
  pais: string;

  @IsString()
  provincia: string;

  @IsString()
  localidad: string;
}
