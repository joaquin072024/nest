import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UseGuards } from '@nestjs/common';
import { Guard } from '../guards/guard';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TasksService } from './tasks.service';

@Controller()
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @UseGuards(Guard)
  @Post('/tasks')
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.create(createTaskDto);
  }

  @Get('/tasks')
  findAll(@Query('sort') sort: string) {
    if (sort === 'priority') return this.tasksService.sortByPriority();
    if (sort === 'scheduled') return this.tasksService.sortByScheduled();

    return this.tasksService.findAll();
  }

  @Get('/tasks/:id')
  findOne(@Param('id') id: string) {
    return this.tasksService.findOne(id);
  }

  @UseGuards(Guard)
  @Patch('/tasks/:id')
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.tasksService.update(id, updateTaskDto);
  }

  @UseGuards(Guard)
  @Delete('/tasks/:id')
  remove(@Param('id') id: string) {
    return this.tasksService.remove(id);
  }
}
