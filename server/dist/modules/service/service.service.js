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
exports.ServiceService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let ServiceService = class ServiceService {
    constructor(serviceModel) {
        this.serviceModel = serviceModel;
    }
    async createService(createServiceDto) {
        const createdService = await this.serviceModel.create(createServiceDto);
        return createdService;
    }
    async findAllServices() {
        return this.serviceModel.find().exec();
    }
    async findOneService(id) {
        return this.serviceModel.findOne({ _id: id }).exec();
    }
    async deleteService(id) {
        const deletedService = await this.serviceModel.findByIdAndRemove({ _id: id }).exec();
        return deletedService;
    }
    async updateService(id, updateServiceDto) {
        const updatedService = await this.serviceModel.findByIdAndUpdate(id, updateServiceDto, { new: true }).exec();
        return updatedService;
    }
};
ServiceService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)("service")),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ServiceService);
exports.ServiceService = ServiceService;
//# sourceMappingURL=service.service.js.map