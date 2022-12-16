import { CreatePost } from '@app/usecases/create-post';
import { GetAuthorPosts } from '@app/usecases/get-author-posts';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreatePostDTO } from '../dtos/create-post-dto';
import { PostViewModel } from '../view-models/post-view-model';

@Controller('posts')
export class PostsController {
  constructor(
    private readonly createPost: CreatePost,
    private readonly getAuthorPosts: GetAuthorPosts,
  ) {}

  @Post()
  async create(@Body() body: CreatePostDTO) {
    const { author, title, content } = body;

    const { post } = await this.createPost.execute({ author, title, content });

    return {
      post: PostViewModel.toHTTP(post),
    };
  }

  @Get('from/:author')
  async getFromAuthor(@Param('author') author: string) {
    const { posts } = await this.getAuthorPosts.execute({ author });

    return {
      posts: posts.map((post) => {
        return PostViewModel.toHTTP(post);
      }),
    };
  }
}
