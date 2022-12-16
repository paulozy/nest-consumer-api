import { CreatePost } from '@app/usecases/create-post';
import { DatabaseModule } from '@infra/database/database.module';
import { Module } from '@nestjs/common';
import { PostsController } from './kafka/controllers/posts.controller';
import { KafkaConsumerService } from './kafka/kafka-consumer.service';

@Module({
  imports: [DatabaseModule],
  providers: [KafkaConsumerService, CreatePost],
  controllers: [PostsController],
})
export class MessagingModule {}
