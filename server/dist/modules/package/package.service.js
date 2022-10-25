"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackageService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let PackageService = class PackageService {
    constructor(packageModel) {
        this.packageModel = packageModel;
    }
    async createPackage(createPackageDto) {
        const createdPackage = await this.packageModel.create(createPackageDto);
        return createdPackage;
    }
    async finAllPackages() {
        return await this.packageModel.find().exec();
    }
    async findSinglePackage(id) {
        return await this.packageModel.findById({ _id: id }).exec();
    }
    async deletePackage(id) {
        const deletedPackage = await this.packageModel.findByIdAndRemove({ _id: id }).exec();
        return deletedPackage;
    }
    async updatePackage(id, updatePackage) {
        const updatedPackage = await this.packageModel.findByIdAndUpdate(id, updatePackage, { new: true });
        return updatePackage;
    }
};
PackageService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('package')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], PackageService);
exports.PackageService = PackageService;
//# sourceMappingURL=package.service.js.map