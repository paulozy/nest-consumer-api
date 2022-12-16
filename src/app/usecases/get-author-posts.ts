import { Injectable } from '@nestjs/common';
import { Post } from '../entities/Post';
import { IPostRepository } from '../repositories/post-repository';

interface CreatePostRequest {
  author: string;
}

interface CreatePostResponse {
  posts: Post[];
}

@Injectable()
export class GetAuthorPosts {
  constructor(private readonly postRepository: IPostRepository) {}

  async execute(request: CreatePostRequest): Promise<CreatePostResponse> {
    const { author } = request;

    const posts = await this.postRepository.findByAuthorName(author);

    return { posts };
  }
}
