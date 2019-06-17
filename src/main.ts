import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice({
    options: {
      servers: ['nats://localhost:4222'],
    },
    transport: Transport.NATS,
  });

  await app.startAllMicroservicesAsync();
  await app.listen(3001);
}
bootstrap();
