import { ServiceService } from './service.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { Service } from './schemas/service.schema';
export declare class ServiceController {
    private readonly serveService;
    constructor(serveService: ServiceService);
    createService(createServiceDto: CreateServiceDto): Promise<void>;
    findAllServices(): Promise<Service[]>;
    findOneService(id: any): Promise<Service>;
    deleteService(id: any): Promise<Service & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    updateService(id: any, updateServiceDto: CreateServiceDto): Promise<Service & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
