import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BrandModule } from './brand/brand.module';
import { CarModule } from './car/car.module';
import { typeORM } from './config/typeORM';
import { LanguageModule } from './language/language.module';
import { RecidenceModule } from './recidence/recidence.module';
import { TypeUserModule } from './type_user/type_user.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeORM()),
    UserModule,
    RecidenceModule,
    LanguageModule,
    TypeUserModule,
    BrandModule,
    CarModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
