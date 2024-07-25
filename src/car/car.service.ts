import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { Car } from './entities/car.entity';

@Injectable()
export class CarService {
  constructor(@InjectRepository(Car) private readonly carRepository: Repository<Car>) {}
  create(createCarDto: CreateCarDto) {
    return this.carRepository.save(createCarDto);
  }

  findAll() {
    return this.carRepository.find({ relations: { brand: true } });
  }

  findOne(id: string) {
    return this.carRepository.findOne({ where: { id: id } });
  }

  update(id: string, updateCarDto: UpdateCarDto) {
    return this.carRepository.update({ id: id }, updateCarDto);
  }

  async remove(id: string) {
    const data = await this.carRepository.findOne({ where: { id: id } });
    return this.carRepository.softRemove(data);
  }
}
