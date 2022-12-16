import { CreatePost } from '@app/usecases/create-post';
import { GetAuthorPosts } from '@app/usecases/get-author-posts';
import { DatabaseModule } from '@infra/database/database.module';
import { Module } from '@nestjs/common';
import { PostsController } from './controllers/posts.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [PostsController],
  providers: [CreatePost, GetAuthorPosts],
})
export class HttpModule {}
