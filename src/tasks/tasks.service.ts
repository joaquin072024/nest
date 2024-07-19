import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { randomUUID } from 'crypto';
import * as fs from 'fs/promises';
import { DATABASE_PATH } from '../common/constants/global.constants';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskDto } from './dto/tasks.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
  constructor(private eventEmitter: EventEmitter2) {}

  async create(task: CreateTaskDto) {
    const tasks: CreateTaskDto[] = await this.findAll();
    const newTask = { ...task, id: randomUUID() };
    const newNewTask = { ...newTask, scheduledTime: new Date().toISOString() };
    tasks.push(newNewTask);
    await fs.writeFile(DATABASE_PATH, JSON.stringify(tasks));
    this.eventEmitter.emit('TASK_CREATED', newNewTask.id);
    return newNewTask;
  }

  async findAll(): Promise<TaskDto[]> {
    const data = await fs.readFile(DATABASE_PATH);
    return JSON.parse(data.toString());
  }

  async sortByPriority(): Promise<TaskDto[]> {
    const data = await this.findAll();
    const sorted = data.sort((taskA, taskB) => taskA.priority - taskB.priority);
    return sorted.reverse();
  }

  async sortByScheduled(): Promise<TaskDto[]> {
    const data = await this.findAll();
    const sorted = data.sort(
      (taskA, taskB) => new Date(taskA.scheduledTime).getTime() - new Date(taskB.scheduledTime).getTime(),
    );
    return sorted.reverse();
  }

  async findOne(id: string) {
    const tasks = await this.findAll();

    const task = tasks.find((task) => task.id == id);
    if (!task) throw new NotFoundException('Task id does not exist');
    return task;

    // return `This action returns a #${id} task`;
  }

  async update(id: string, task: UpdateTaskDto) {
    const tasks = await this.findAll();
    const index = tasks.findIndex((task) => task.id == id);

    if (index == -1) throw new BadRequestException('id does not exist');

    tasks[index] = { ...tasks[index], ...task };
    await fs.writeFile(DATABASE_PATH, JSON.stringify(tasks));
    return task;
    //TODO: Evento de update
  }

  async remove(id: string) {
    const tasks = await this.findAll();
    const index = tasks.findIndex((task) => task.id == id);

    if (index == -1) throw new BadRequestException('task does not exist');

    tasks.splice(index, 1);

    await fs.writeFile(DATABASE_PATH, JSON.stringify(tasks));
  }
}
