import * as mongoose from 'mongoose';
export declare type PackageDocument = Package & mongoose.Document;
export declare class Package {
    packagename: string;
    description: string;
    servicesArr: {
        service_id: mongoose.Schema.Types.ObjectId;
        service_qty: number;
    }[];
}
export declare const PackageSchema: mongoose.Schema<Package, mongoose.Model<Package, any, any, any, any>, {}, {}, any, {}, "type", Package>;
