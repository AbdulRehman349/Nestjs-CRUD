import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServiceModule } from './modules/service/service.module';
import { PackageModule } from './modules/package/package.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://abdulrehman:helloworld@newcluster.s4vyylm.mongodb.net/nest-demo?retryWrites=true&w=majority'),
    ServiceModule,
    PackageModule,
  ],
})
export class AppModule { }
