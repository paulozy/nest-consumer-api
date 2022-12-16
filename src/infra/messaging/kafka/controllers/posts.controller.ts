import { CreatePost } from '@app/usecases/create-post';
import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';

interface CreatePostPayload {
  author: string;
  title: string;
  content: string;
}

@Controller()
export class PostsController {
  constructor(private readonly createPost: CreatePost) {}

  @EventPattern('posts.create-post')
  async createPostHandler(payload: CreatePostPayload) {
    const { author, title, content } = payload;

    console.log(payload);

    await this.createPost.execute({ author, title, content });
  }
}
