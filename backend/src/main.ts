import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

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
  await app.listen(3000);
}
bootstrap();
