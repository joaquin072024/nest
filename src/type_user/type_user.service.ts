import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTypeUserDto } from './dto/create-type_user.dto';
import { UpdateTypeUserDto } from './dto/update-type_user.dto';
import { TypeUser } from './entities/type_user.entity';

@Injectable()
export class TypeUserService {
  constructor(@InjectRepository(TypeUser) private readonly typeRepository: Repository<TypeUser>) {}

  create(createTypeUserDto: CreateTypeUserDto) {
    return this.typeRepository.save(createTypeUserDto);
  }

  findAll() {
    return this.typeRepository.find();
  }

  findOne(id: string) {
    return this.typeRepository.findOne({ where: { id: id } });
  }

  update(id: string, updateTypeUserDto: UpdateTypeUserDto) {
    return this.typeRepository.update({ id: id }, updateTypeUserDto);
  }

  async remove(id: string) {
    const data = await this.typeRepository.findOne({ where: { id: id } });
    return this.typeRepository.softRemove(data);
  }
}
