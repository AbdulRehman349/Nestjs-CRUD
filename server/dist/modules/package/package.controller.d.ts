import { CreatePackageDto } from './dto/create-package.dto';
import { PackageService } from './package.service';
export declare class PackageController {
    private readonly packageService;
    constructor(packageService: PackageService);
    createPackage(createPackageDto: CreatePackageDto): Promise<import("./schemas/package.schema").Package & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAllPackages(): Promise<Omit<import("./schemas/package.schema").Package & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }, never>[]>;
    findSinglePackage(id: string): Promise<import("./schemas/package.schema").Package & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    deletePackage(id: string): Promise<import("./schemas/package.schema").Package & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    updatePackage(id: string, createPackageDto: CreatePackageDto): Promise<CreatePackageDto>;
}
