import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {}

  create(createUserDto: CreateUserDto) {
    return this.userRepository.save(createUserDto);
  }

  findAll() {
    return this.userRepository.find({ relations: { recidence: true, type_user: true, car: true, language: true } });
  }

  findOne(id: string) {
    return this.userRepository.findOne({ where: { id: id } });
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.userRepository.update({ id: id }, updateUserDto);
  }

  async remove(id: string) {
    const data = await this.userRepository.findOne({ where: { id: id } });
    return this.userRepository.softRemove(data);
  }
}
