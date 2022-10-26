import * as mongoose from 'mongoose';
import { Service } from "src/modules/service/schemas/service.schema";
export declare type PackageDocument = Package & mongoose.Document;
export declare class Package {
    packagename: string;
    description: string;
    servicesArr: {
        service_id: Service;
        service_qty: number;
    }[];
}
export declare const PackageSchema: mongoose.Schema<Package, mongoose.Model<Package, any, any, any, any>, {}, {}, any, {}, "type", Package>;
