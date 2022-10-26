import mongoose, { Document } from 'mongoose';
export declare type ServiceDocument = Service & Document;
export declare class Service {
    servicename: string;
    description: string;
    price: number;
}
export declare const ServiceSchema: mongoose.Schema<Service, mongoose.Model<Service, any, any, any, any>, {}, {}, any, {}, "type", Service>;
