import { Model } from 'mongoose';
import { CreateServiceDto } from './dto/create-service.dto';
import { Service, ServiceDocument } from './schemas/service.schema';
export declare class ServiceService {
    private readonly serviceModel;
    constructor(serviceModel: Model<ServiceDocument>);
    create(createCatDto: CreateServiceDto): Promise<Service>;
    findAll(): Promise<Service[]>;
    findOne(id: string): Promise<Service>;
    delete(id: string): Promise<Service & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
