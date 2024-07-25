import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';

@Injectable()
export class BrandService {
  constructor(@InjectRepository(Brand) private readonly brandRepository: Repository<Brand>) {}
  create(createBrandDto: CreateBrandDto) {
    return this.brandRepository.save(createBrandDto);
  }

  findAll() {
    return this.brandRepository.find();
  }

  findOne(id: string) {
    return this.brandRepository.findOne({ where: { id: id } });
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    return this.brandRepository.update({ id: id }, updateBrandDto);
  }

  async remove(id: string) {
    const data = await this.brandRepository.findOne({ where: { id: id } });
    return this.brandRepository.softRemove(data);
  }
}
