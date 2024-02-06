import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";

@Schema({
    timestamps: true
})
export class Thought{
    @Prop({
        unique: true,
        required: true,
    })
    title: string
}
export const ThoughtSchema = SchemaFactory.createForClass(Thought);