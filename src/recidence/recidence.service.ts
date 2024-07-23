import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRecidenceDto } from './dto/create-recidence.dto';
import { UpdateRecidenceDto } from './dto/update-recidence.dto';
import { Recidence } from './entities/recidence.entity';

@Injectable()
export class RecidenceService {
  constructor(@InjectRepository(Recidence) private readonly recidenceRepository: Repository<Recidence>) {}

  create(createRecidenceDto: CreateRecidenceDto) {
    return this.recidenceRepository.save(createRecidenceDto);
  }

  findAll() {
    return this.recidenceRepository.find();
  }

  findOne(id: string) {
    return this.recidenceRepository.findOne({ where: { id: id } });
  }

  update(id: string, updateRecidenceDto: UpdateRecidenceDto) {
    return this.recidenceRepository.update({ id: id }, updateRecidenceDto);
  }

  async remove(id: string) {
    const data = await this.recidenceRepository.findOne({ where: { id: id } });
    return this.recidenceRepository.softRemove(data);
  }
}
