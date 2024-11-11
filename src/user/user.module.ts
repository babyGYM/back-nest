import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User } from './entities/user.entity';
import { UserSchema } from './entities/user.schema';
import { Rol, RolSchema } from '../rol/entities/rol.schema';
import { Hijo, HijoSchema } from '../hijo/entities/hijo.schema';

@Module({
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Rol.name, schema: RolSchema },
      { name: Hijo.name, schema: HijoSchema },
    ]),
  ]
})
export class UserModule {}
