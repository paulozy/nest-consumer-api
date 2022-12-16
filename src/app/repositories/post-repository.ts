import { Post } from '../entities/Post';

export abstract class IPostRepository {
  abstract create(post: Post): Promise<void>;
  abstract findByAuthorName(author: string): Promise<Post[] | null>;
}
