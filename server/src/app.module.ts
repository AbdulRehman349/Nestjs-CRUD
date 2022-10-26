import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServiceModule } from './modules/service/service.module';
import { PackageModule } from './modules/package/package.module';

@Module({
  imports: [
    MongooseModule.forRoot('your databse connection array'),
    ServiceModule,
    PackageModule,
  ],
})
export class AppModule { }
