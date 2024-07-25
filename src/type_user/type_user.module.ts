import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeUser } from './entities/type_user.entity';
import { TypeUserController } from './type_user.controller';
import { TypeUserService } from './type_user.service';

@Module({
  imports: [TypeOrmModule.forFeature([TypeUser])],
  controllers: [TypeUserController],
  providers: [TypeUserService],
})
export class TypeUserModule {}
