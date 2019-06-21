import { Controller, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import {
  CONTEXT,
  MessagePattern,
  RequestContext,
} from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
  ) {}

  @MessagePattern('hello.>')
  getHello(data: any, blah: any) {
    console.log('blah: ', blah);
    console.log('context: ', data);
    // this logs correct data input
    return this.appService.getHello();
  }
}
