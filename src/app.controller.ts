import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import {
  MessagePattern,
} from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
  ) {}

  @MessagePattern({ cmd: 'hello' })
  getHello(data: any) {
    // this logs correct data input
    console.log('data: ', data);
    return this.appService.getHello();
  }
}
