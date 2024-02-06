import { Module } from '@nestjs/common';
import { ThoughtsController } from './thoughts.controller';
import { ThoughtsService } from './thoughts.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Thought, ThoughtSchema } from 'src/schemas/thought.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Thought.name,
        schema: ThoughtSchema
      },
    ]),
  ],
  controllers: [ThoughtsController],
  providers: [ThoughtsService]
})
export class ThoughtsModule {}
