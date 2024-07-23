import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Recidence } from './entities/recidence.entity';
import { RecidenceController } from './recidence.controller';
import { RecidenceService } from './recidence.service';

@Module({
  imports: [TypeOrmModule.forFeature([Recidence])],
  controllers: [RecidenceController],
  providers: [RecidenceService],
})
export class RecidenceModule {}
