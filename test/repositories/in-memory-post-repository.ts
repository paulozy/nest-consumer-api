import { Post } from '../../src/app/entities/Post';
import { IPostRepository } from '../../src/app/repositories/post-repository';

export class InMemoryPostRepository extends IPostRepository {
  posts: Post[] = [];

  async create(post: Post): Promise<void> {
    this.posts.push(post);
  }
}
