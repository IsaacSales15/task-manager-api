import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { TaskDto, FindAllParams } from './task.dto';
import { TaskService } from './task.service';

// O @Controller serve para indicar a rota do endpoint, no caso "/task"
@Controller('task')
export class TaskController {

    constructor(private readonly taskService: TaskService) { }

    // Também é possível adicionar essas rotas ao @Post, mas caso esteja em branco ele atenderá por "/task" ou "/task/"
    @Post()
    create(@Body() task: TaskDto){
        this.taskService.create(task);
    }

//Rotas Get
    @Get('/:id')
    findById(@Param('id') id: string): TaskDto{
        return this.taskService.findByid(id);
    }

    @Get()
    findAll(@Query() params: FindAllParams): TaskDto[] {
        return this.taskService.findAll(params)
    }

//Rotas Put
    @Put()
    update(@Body() task: TaskDto){
        this.taskService.update(task);
    }

//Rotas Delete
    @Delete('/:id')
    delete(@Param('id') id: string){
        this.taskService.delete(id);
    }
}
