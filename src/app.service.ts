import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';

@Injectable()
export class AppService {
  @OnEvent('TASK_CREATED')
  getHello(id: string): void {
    console.log('Se creo una tarea', id);
  }
}
