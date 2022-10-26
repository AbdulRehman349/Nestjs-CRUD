import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  var cors = require('cors')
  const app = await NestFactory.create(AppModule);
  app.use(cors())
  await app.listen(5000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
