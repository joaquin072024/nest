import { IsString } from 'class-validator';
import { Brand } from '../../brand/entities/brand.entity';

export class CreateCarDto {
  @IsString()
  modelo: string;

  @IsString()
  color: string;

  @IsString()
  patente: string;

  @IsString()
  brand: Brand;

  create_at: Date;

  delete_at: Date;
}
