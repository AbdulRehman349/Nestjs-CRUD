import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServiceModule } from './service/service.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://abdulrehman:helloworld@newcluster.s4vyylm.mongodb.net/nest-demo?retryWrites=true&w=majority'),
    ServiceModule,
  ],
})
export class AppModule { }
