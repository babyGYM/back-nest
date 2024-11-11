import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ collection : 'rol'})
export class Rol {
  @Prop({ required: true })
  name: string;
}

export const RolSchema = SchemaFactory.createForClass(Rol);