import { CreatePackageDto } from './dto/create-package.dto';
import { Package } from './schemas/package.schema';
import { PackageService } from './package.service';
export declare class PackageController {
    private readonly packageService;
    constructor(packageService: PackageService);
    createPackage(createPackageDto: CreatePackageDto): Promise<Package & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAllPackages(): Promise<(Package & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findSinglePackage(id: string): Promise<Package & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    deletePackage(id: string): Promise<Package & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    updatePackage(id: string, createPackageDto: CreatePackageDto): Promise<CreatePackageDto>;
}
