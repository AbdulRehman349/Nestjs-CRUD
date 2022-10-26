import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from 'mongoose';
import { Service } from "src/modules/service/schemas/service.schema";


export type PackageDocument = Package & mongoose.Document;


@Schema()
export class Package {


    @Prop()
    packagename: string;

    @Prop()
    description: string;

    @Prop({
        type: [{ service_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Service' }, service_qty: { type: Number } }]
    })
    servicesArr: { service_id: Service, service_qty: number }[]
}

export const PackageSchema = SchemaFactory.createForClass(Package)