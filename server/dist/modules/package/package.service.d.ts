import { Model } from 'mongoose';
import { ServiceDocument } from '../service/schemas/service.schema';
import { CreatePackageDto } from './dto/create-package.dto';
import { Package, PackageDocument } from "./schemas/package.schema";
export declare class PackageService {
    private readonly packageModel;
    private readonly serviceModel;
    constructor(packageModel: Model<PackageDocument>, serviceModel: Model<ServiceDocument>);
    createPackage(createPackageDto: CreatePackageDto): Promise<Package & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAllPackages(): Promise<Omit<Package & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }, never>[]>;
    findSinglePackage(id: string): Promise<Package & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    deletePackage(id: string): Promise<Package & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    updatePackage(id: string, updatePackage: CreatePackageDto): Promise<CreatePackageDto>;
}
