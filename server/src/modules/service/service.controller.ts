import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ServiceService } from './service.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { Service } from './schemas/service.schema';

@Controller('service')
export class ServiceController {
  constructor(private readonly serveService: ServiceService) { }

  @Post()
  async createService(@Body() createServiceDto: CreateServiceDto) {
    await this.serveService.createService(createServiceDto);
  }

  @Get()
  async findAllServices(): Promise<Service[]> {
    return this.serveService.findAllServices();
  }

  @Get(':id')
  async findOneService(@Param('id') id): Promise<Service> {
    return this.serveService.findOneService(id);
  }

  @Delete(':id')
  async deleteService(@Param('id') id) {
    return this.serveService.deleteService(id);
  }

  @Put(':id')
  async updateService(@Param('id') id: string, @Body() updateServiceDto: CreateServiceDto): Promise<Service> {
    return this.serveService.updateService(id, updateServiceDto);
  }
}
