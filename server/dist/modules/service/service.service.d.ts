import { Model } from 'mongoose';
import { CreateServiceDto } from './dto/create-service.dto';
import { Service, ServiceDocument } from './schemas/service.schema';
export declare class ServiceService {
    private readonly serviceModel;
    constructor(serviceModel: Model<ServiceDocument>);
    createService(createServiceDto: CreateServiceDto): Promise<Service & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAllServices(): Promise<(Service & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findOneService(id: any): Promise<Service & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    deleteService(id: any): Promise<Service & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    updateService(id: string, updateServiceDto: CreateServiceDto): Promise<Service & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
