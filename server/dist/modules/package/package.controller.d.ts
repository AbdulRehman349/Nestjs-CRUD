import { CreatePackageDto } from './dto/create-package.dto';
import { Package } from './schemas/package.schema';
import { PackageService } from './package.service';
export declare class PackageController {
    private readonly packageService;
    constructor(packageService: PackageService);
    createPackage(createPackageDto: CreatePackageDto): Promise<Package>;
    findAllPackages(): Promise<Package[]>;
    findSinglePackage(id: string): Promise<Package>;
    deletePackage(id: string): Promise<Package>;
    updatePackage(id: string, createPackageDto: CreatePackageDto): Promise<CreatePackageDto>;
}
