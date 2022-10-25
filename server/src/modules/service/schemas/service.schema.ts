import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ServiceDocument = Service & Document;

@Schema()
export class Service {

  @Prop()
  servicename: string;

  @Prop()
  description: string;

  @Prop()
  price: number;
}

export const ServiceSchema = SchemaFactory.createForClass(Service);
