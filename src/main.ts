import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuración de Swagger
  const config = new DocumentBuilder()
    .setTitle('BabyGYM')  // Título de la API
    .setDescription('MOTLON api babygym')  // Descripción de la API
    .setVersion('1.0')  // Versión de la API
    .addTag('users')
    .addServer('http://localhost:3000', 'Development Server')  // Definir servidor para desarrollo
    .addServer('https://api.example.com', 'Production Server') // Etiqueta para los endpoints de usuarios
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);  // Ruta para acceder a la documentación (http://localhost:3000/api)

  await app.listen(3000);
}
bootstrap();