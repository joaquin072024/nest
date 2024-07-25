import { IsString } from 'class-validator';

export class CreateTypeUserDto {
  @IsString()
  id: string;

  @IsString()
  description: string;

  create_at: Date;

  delete_at: Date;
}
