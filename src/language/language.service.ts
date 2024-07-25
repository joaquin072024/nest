import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLanguageDto } from './dto/create-language.dto';
import { UpdateLanguageDto } from './dto/update-language.dto';
import { Language } from './entities/language.entity';

@Injectable()
export class LanguageService {
  constructor(@InjectRepository(Language) private readonly LanguageRepository: Repository<Language>) {}
  create(createLanguageDto: CreateLanguageDto) {
    return this.LanguageRepository.save(createLanguageDto);
  }

  findAll() {
    return this.LanguageRepository.find();
  }

  findOne(id: string) {
    return this.LanguageRepository.findOne({ where: { id: id } });
  }

  update(id: string, updateLanguageDto: UpdateLanguageDto) {
    return this.LanguageRepository.update({ id: id }, updateLanguageDto);
  }

  async remove(id: string) {
    const data = await this.LanguageRepository.findOne({ where: { id: id } });
    return this.LanguageRepository.softRemove(data);
  }
}
