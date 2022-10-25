import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePackageDto } from './dto/create-package.dto';
import { Package, PackageDocument } from "./schemas/package.schema";

@Injectable()
export class PackageService {
    constructor(@InjectModel('package') private readonly packageModel: Model<PackageDocument>) { }


    async createPackage(createPackageDto: CreatePackageDto) {
        const createdPackage = (await this.packageModel.create(createPackageDto)).populate('servicesArr.service_id')
        return createdPackage
    }

    async findAllPackages() {
        return await this.packageModel.find().populate('servicesArr.service_id').exec()
    }

    async findSinglePackage(id: string) {
        return await this.packageModel.findById({ _id: id }).exec()
    }

    async deletePackage(id: string) {
        const deletedPackage = await this.packageModel.findByIdAndRemove({ _id: id }).exec()
        return deletedPackage
    }

    async updatePackage(id: string, updatePackage: CreatePackageDto) {
        const updatedPackage = await this.packageModel.findByIdAndUpdate(id, updatePackage, { new: true })
        return updatePackage
    }
}