import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ServiceService } from './service.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { Service } from './schemas/service.schema';

@Controller('service')
export class ServiceController {
  constructor(private readonly catsService: ServiceService) { }

  @Post()
  async createService(@Body() createCatDto: CreateServiceDto) {
    await this.catsService.createService(createCatDto);
  }

  @Get()
  async findAllServices(): Promise<Service[]> {
    return this.catsService.findAllServices();
  }

  @Get(':id')
  async findOneService(@Param('id') id): Promise<Service> {
    return this.catsService.findOneService(id);
  }

  @Delete(':id')
  async deleteService(@Param('id') id) {
    return this.catsService.deleteService(id);
  }
}
