import { Body, Controller, Post, Delete, Put, Get, Param } from '@nestjs/common'
import { CreatePackageDto } from './dto/create-package.dto';
import { PackageService } from './package.service';


@Controller('package')
export class PackageController {
    constructor(private readonly packageService: PackageService) { }

    @Post()
    async createPackage(@Body() createPackageDto: CreatePackageDto) {
        return this.packageService.createPackage(createPackageDto)
    }

    @Get()
    async findAllPackages() {
        return this.packageService.findAllPackages()
    }

    @Get(':id')
    async findSinglePackage(@Param('id') id: string) {
        return this.packageService.findSinglePackage(id)
    }

    @Delete(':id')
    async deletePackage(@Param('id') id: string) {
        return this.packageService.deletePackage(id)
    }

    @Put(':id')
    async updatePackage(@Param('id') id: string, @Body() createPackageDto: CreatePackageDto) {
        return this.packageService.updatePackage(id, createPackageDto)
    }
}