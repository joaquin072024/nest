import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORM } from './config/typeORM';
import { RecidenceModule } from './recidence/recidence.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeORM()), UserModule, RecidenceModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
