import { ServiceService } from './service.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { Service } from './schemas/service.schema';
export declare class ServiceController {
    private readonly serveService;
    constructor(serveService: ServiceService);
    createService(createServiceDto: CreateServiceDto): Promise<void>;
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
