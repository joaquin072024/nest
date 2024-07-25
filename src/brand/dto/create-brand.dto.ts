import { IsString } from 'class-validator';

export class CreateBrandDto {
  @IsString()
  description: string;

  create_at: Date;

  delete_at: Date;
}
