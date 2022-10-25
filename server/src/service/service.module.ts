import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServiceController } from './service.controller';
import { ServiceService } from './service.service';
import { ServiceSchema } from './schemas/service.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'service', schema: ServiceSchema }])],
  controllers: [ServiceController],
  providers: [ServiceService],
})
export class ServiceModule { }
