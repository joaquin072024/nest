import { PartialType } from '@nestjs/mapped-types';
import { CreateTypeUserDto } from './create-type_user.dto';

export class UpdateTypeUserDto extends PartialType(CreateTypeUserDto) {}
