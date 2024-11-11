import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { HijoModule } from './hijo/hijo.module';
import { CuestionarioModule } from './cuestionario/cuestionario.module';
import { PreguntaModule } from './pregunta/pregunta.module';
import { CursoModule } from './curso/curso.module';
import { ContenidoModule } from './contenido/contenido.module';
import { UserModule } from './user/user.module';
import { RolModule } from './rol/rol.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://babyGYM:%40BabyFamilyGym@babygym.6uncz.mongodb.net/babyFamily'),
    HijoModule,
    CuestionarioModule,
    PreguntaModule,
    CursoModule,
    ContenidoModule,
    UserModule,
    RolModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
