import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServiceModule } from './modules/service/service.module';
import { PackageModule } from './modules/package/package.module';

@Module({
  imports: [
    MongooseModule.forRoot('your database connection string'),
    ServiceModule,
    PackageModule,
  ],
})
export class AppModule { }
