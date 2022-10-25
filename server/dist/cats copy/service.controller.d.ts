import { ServiceService } from './service.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { Service } from './schemas/service.schema';
export declare class ServiceController {
    private readonly catsService;
    constructor(catsService: ServiceService);
    create(createCatDto: CreateServiceDto): Promise<void>;
    findAll(): Promise<Service[]>;
    findOne(id: string): Promise<Service>;
    delete(id: string): Promise<Service & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
