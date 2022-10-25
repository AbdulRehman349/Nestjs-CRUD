import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { PackageController } from "./package.controller";
import { PackageService } from "./package.service";
import { PackageSchema } from "./schemas/package.schema";

@Module({
    imports: [MongooseModule.forFeature([{ name: 'package', schema: PackageSchema }])],
    controllers: [PackageController],
    providers: [PackageService]
})
export class PackageModule { }