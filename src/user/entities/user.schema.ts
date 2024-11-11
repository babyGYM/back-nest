import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import * as bcrypt from "bcryptjs";

type id = string | Types.ObjectId;

@Schema({ collection: 'user' })
export class User extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  age: number;

  @Prop({ type: Types.ObjectId, ref: 'Rol', default: null })
  Rol: id;

  @Prop({
    type: [
      {
        type: Types.ObjectId,
        ref: 'Hijo',
      },
    ],
  })
  Hijos: id[];

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;

}
export type UserDocument = User & Document;

export const UserSchema = SchemaFactory.createForClass(User);

// Hook pre-save para hashear la contraseña
UserSchema.pre('save', async function (next) {
  const user = this as UserDocument;

  if (user.isModified('password') || user.isNew) {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
  }
  next();
});
