import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
  .setTitle('my-nest-project API')
  .setDescription('the description of the APIs')
  .setVersion('1.0')
  .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('/', app, document);

  await app.listen(3000);
}
bootstrap();
