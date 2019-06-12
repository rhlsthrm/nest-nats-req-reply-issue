import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import {
  Client,
  ClientProxy,
  Transport,
  MessagePattern,
} from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Client({
    options: {
      url: 'nats://localhost:4222',
    },
    transport: Transport.NATS,
  })
  client: ClientProxy;

  @MessagePattern({ cmd: 'hello' })
  getHello(data: any) {
    console.log('data: ', data);
    return this.client.send<number>({ cmd: 'hello' }, [1, 2, 3]);
  }
}
