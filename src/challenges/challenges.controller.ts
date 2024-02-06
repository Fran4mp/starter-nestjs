import { Controller, Get, Post, Put,  Delete, Body, ConflictException, HttpCode, Param, NotFoundException } from '@nestjs/common';
import { ChallengesService } from './challenges.service';
import { CreateChallengeDto } from 'src/dto/create-challenge.dto';
import { UpdateChallengeDto } from 'src/dto/update-challenge.dto';

@Controller('challenges')
export class ChallengesController {
    constructor(private challengesService: ChallengesService){}
    @Get()
    findAll(){
        return this.challengesService.findAll();
    }
    @Post()
    async create(@Body() body: CreateChallengeDto) {
        try {
            return await this.challengesService.create(body);
        }   catch (error) {
            if(error.code === 11000){
                throw new ConflictException('El reto personal ya existe')
            }
            throw error;
        }
        
    }

    @Delete(':id')
    @HttpCode(204)
    async delete(@Param('id') id: string){
        const challenge = await this.challengesService.delete(id);
        if (!challenge) throw new NotFoundException('El reto que buscas no existe')
        return challenge;
    }
    @Put (':id')
    async update(@Param('id') id: string, @Body() body: UpdateChallengeDto){
        const Challenge = await this.challengesService.update(id, body);
        if (!Challenge) throw new NotFoundException('El reto que buscas no existe')
        return Challenge;
    }
}
 