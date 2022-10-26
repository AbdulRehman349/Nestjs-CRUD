import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ServiceSchema } from "../service/schemas/service.schema";
import { PackageController } from "./package.controller";
import { PackageService } from "./package.service";
import { PackageSchema } from "./schemas/package.schema";

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'package', schema: PackageSchema }]),
        MongooseModule.forFeature([{ name: 'service', schema: ServiceSchema }])
    ],
    controllers: [PackageController],
    providers: [PackageService]
})
export class PackageModule { }