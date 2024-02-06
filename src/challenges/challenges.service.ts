import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {Challenge} from '../schemas/challenge.schema'
import { CreateChallengeDto} from 'src/dto/create-challenge.dto';
import { UpdateChallengeDto } from 'src/dto/update-challenge.dto';


@Injectable()
export class ChallengesService {
    constructor(@InjectModel(Challenge.name) private challengeModel: Model<Challenge>){}

    findAll(){
        return this.challengeModel.find();
    }
    async create(createChallenge:CreateChallengeDto) {
        const createdChallenge = new this.challengeModel(createChallenge);
        await createdChallenge.save();
        return createdChallenge;
    }
    
    async delete(id:string){
        return this.challengeModel.findByIdAndDelete(id)
    }
    async update(id: string, challenge: UpdateChallengeDto) {
        return this.challengeModel.findByIdAndUpdate(id, challenge, {new:true});
    }
}
