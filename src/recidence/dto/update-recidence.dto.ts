import { PartialType } from '@nestjs/mapped-types';
import { CreateRecidenceDto } from './create-recidence.dto';

export class UpdateRecidenceDto extends PartialType(CreateRecidenceDto) {}
