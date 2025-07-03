import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import helmet from 'helmet'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.use(helmet())
    app.enableVersioning({
      type:VersioningType.URI
    })

   const config = new DocumentBuilder()
    .setTitle('Organize Simple API')
    .setContact(
      'Rajan Jha',
      'https://github.com/RajanJha2003',
      'rajanj448@gmail.com',
    )
    .setDescription(
      'Organize Simple is an API that allows you to organize your data in a way that is easy to use and understand with the power of large language models.',
    )
    .setVersion('1.0')
    .addTag('organize-simple')
    .build();

    const document=SwaggerModule.createDocument(app,config);
    SwaggerModule.setup('api',app,document)
  

    app.useGlobalPipes(new ValidationPipe())
  await app.listen(3000);
}
bootstrap();
