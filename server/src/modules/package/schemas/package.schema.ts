import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from 'mongoose';

export type PackageDocument = Package & mongoose.Document;

@Schema()
export class Package {

    @Prop()
    packagename: string;

    @Prop()
    description: string;

    @Prop({ type: [{ service_id: { type: mongoose.Schema.Types.ObjectId }, service_qty: { type: Number } }] })
    servicesArr: { service_id: mongoose.Schema.Types.ObjectId; service_qty: number }[]
}

export const PackageSchema = SchemaFactory.createForClass(Package)