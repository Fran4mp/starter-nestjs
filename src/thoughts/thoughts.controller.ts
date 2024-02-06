import { CreateToughtDto } from 'src/dto/create-thought.dto';
import { ThoughtsService } from './thoughts.service';
import { Controller, Get, Post, Delete, Body, ConflictException, HttpCode, Param, NotFoundException } from '@nestjs/common';

@Controller('thoughts')
export class ThoughtsController {
    constructor(private thoughtsService: ThoughtsService){}
    @Get()
    findAll(){
        return this.thoughtsService.findAll();
    }
    @Post()
    async create(@Body() body: CreateToughtDto) {
        try {
            return await this.thoughtsService.create(body);
        }   catch (error) {
            if(error.code === 11000){
                throw new ConflictException('Este pensamiento ya lo has tenido')
            }
            throw error;
        }
        
    }

    @Delete(':id')
    @HttpCode(204)
    async delete(@Param('id') id: string){
        const thought = await this.thoughtsService.delete(id);
        if (!thought) throw new NotFoundException('El pensamiento no existe')
        return thought;
    }
}
