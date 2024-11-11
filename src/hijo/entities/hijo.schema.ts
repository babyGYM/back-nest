import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'hijo' })
export class Hijo extends Document {
  @Prop({ required: true })
  range: string;
}

export const HijoSchema = SchemaFactory.createForClass(Hijo);