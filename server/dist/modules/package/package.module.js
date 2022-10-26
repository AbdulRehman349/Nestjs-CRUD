"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackageModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const service_schema_1 = require("../service/schemas/service.schema");
const package_controller_1 = require("./package.controller");
const package_service_1 = require("./package.service");
const package_schema_1 = require("./schemas/package.schema");
let PackageModule = class PackageModule {
};
PackageModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'package', schema: package_schema_1.PackageSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: 'service', schema: service_schema_1.ServiceSchema }])
        ],
        controllers: [package_controller_1.PackageController],
        providers: [package_service_1.PackageService]
    })
], PackageModule);
exports.PackageModule = PackageModule;
//# sourceMappingURL=package.module.js.map