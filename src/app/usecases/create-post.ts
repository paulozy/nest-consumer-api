import { Post } from '../entities/Post';
import { IPostRepository } from '../repositories/post-repository';

interface CreatePostRequest {
  author: string;
  title: string;
  content: string;
}

interface CreatePostResponse {
  post: Post;
}

export class CreatePost {
  constructor(private readonly postRepository: IPostRepository) {}

  async execute(request: CreatePostRequest): Promise<CreatePostResponse> {
    const { author, title, content } = request;

    const post = new Post({
      author,
      title,
      content,
    });

    await this.postRepository.create(post);

    return { post };
  }
}
