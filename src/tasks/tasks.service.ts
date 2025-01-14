import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from 'src/schemas/task.schema';
import { Model } from 'mongoose';
import { CreateTaskDto } from 'src/dto/create-task.dto';
import { UpdateTaskDto } from 'src/dto/update-task.dto';

@Injectable()
export class TasksService {
    constructor (@InjectModel(Task.name) private taskModel: Model<Task>) {}

    findAll() {
       return this.taskModel.find();
    }

    async create(createTask:CreateTaskDto) {
        const createdTask = new this.taskModel(createTask);
        await createdTask.save();
        return createdTask;
        
    }

    async delete(id: string) {
        return this.taskModel.findByIdAndDelete(id);
    }
    async update(id: string, task: UpdateTaskDto) {
        return this.taskModel.findByIdAndUpdate(id, task, {new:true});
    }
}
