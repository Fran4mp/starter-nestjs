import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose"

@Schema({
    timestamps: true
})
export class Challenge{
    @Prop({
        unique: true,
        required: true,
    })
    title: string

    @Prop()
    description: string
    
    @Prop({
        default: false,
    })
    done: boolean;
} 

export const ChallengeSchema = SchemaFactory.createForClass(Challenge);