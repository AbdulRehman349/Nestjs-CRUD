import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateServiceDto } from './dto/create-service.dto';
import { Service, ServiceDocument } from './schemas/service.schema';

@Injectable()
export class ServiceService {
  constructor(@InjectModel("service") private readonly serviceModel: Model<ServiceDocument>) { }


  async createService(createServiceDto: CreateServiceDto): Promise<Service> {
    const createdService = await this.serviceModel.create(createServiceDto);
    return createdService;
  }

  async findAllServices(): Promise<Service[]> {
    return this.serviceModel.find().exec();
  }

  async findOneService(id: any): Promise<Service> {
    return this.serviceModel.findOne({ _id: id }).exec();
  }

  async deleteService(id: any) {
    const deletedService = await this.serviceModel.findByIdAndRemove({ _id: id }).exec();
    return deletedService;
  }

  async updateService(id: string, updateServiceDto: CreateServiceDto) {
    const updatedService = await this.serviceModel.findByIdAndUpdate(id, updateServiceDto, { new: true }).exec()
    return updatedService;
  }
}
