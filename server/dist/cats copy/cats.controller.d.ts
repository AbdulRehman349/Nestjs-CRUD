import { CatsService } from './service.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { Service } from './schemas/service.schema';
export declare class CatsController {
    private readonly catsService;
    constructor(catsService: CatsService);
    create(createCatDto: CreateServiceDto): Promise<void>;
    findAll(): Promise<Service[]>;
    findOne(id: string): Promise<Service>;
    delete(id: string): Promise<Service & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
