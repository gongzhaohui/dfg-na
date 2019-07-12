import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors();

  const htmlpath = join(__dirname, '../', 'client/');
  // console.log(htmlpath);
  app.useStaticAssets(htmlpath);
  app.setBaseViewsDir(htmlpath);
  app.setViewEngine('html');
  await app.listen(3000);
}
bootstrap();
