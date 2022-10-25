import { Model } from 'mongoose';
import { CreateServiceDto } from './dto/create-service.dto';
import { Service, ServiceDocument } from './schemas/service.schema';
export declare class ServiceService {
    private readonly serviceModel;
    constructor(serviceModel: Model<ServiceDocument>);
    createService(createServiceDto: CreateServiceDto): Promise<Service>;
    findAllServices(): Promise<Service[]>;
    findOneService(id: any): Promise<Service>;
    deleteService(id: any): Promise<Service & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
