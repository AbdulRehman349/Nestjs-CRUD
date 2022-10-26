import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type ServiceDocument = Service & Document;

@Schema()
export class Service {

  @Prop()
  servicename: string;

  @Prop()
  description: string;

  @Prop()
  price: string;
}

export const ServiceSchema = SchemaFactory.createForClass(Service);