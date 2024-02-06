import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ChallengesModule } from './challenges/challenges.module';
import { ThoughtsModule } from './thoughts/thoughts.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/tasksdb'),
    TasksModule,
    ChallengesModule,
    ThoughtsModule,
    
  ],
})
export class AppModule {}
