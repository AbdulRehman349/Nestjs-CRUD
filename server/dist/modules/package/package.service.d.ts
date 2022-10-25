import { Model } from 'mongoose';
import { CreatePackageDto } from './dto/create-package.dto';
import { Package, PackageDocument } from "./schemas/package.schema";
export declare class PackageService {
    private readonly packageModel;
    constructor(packageModel: Model<PackageDocument>);
    createPackage(createPackageDto: CreatePackageDto): Promise<Omit<Package & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
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
