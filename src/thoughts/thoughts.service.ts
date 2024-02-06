import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {Thought} from '../schemas/thought.schema'
import { CreateToughtDto} from 'src/dto/create-thought.dto';

@Injectable()
export class ThoughtsService {
    constructor(@InjectModel(Thought.name) private thoughtModel: Model<Thought>){}

    findAll(){
        return this.thoughtModel.find();
    }
    async create(createThought:CreateToughtDto) {
        const createdThought = new this.thoughtModel(createThought,);
        await createdThought.save();
        console.log(createdThought);
        return createdThought;
        
    }
    async delete(id:string){
        return this.thoughtModel.findByIdAndDelete(id)
    }
}
 