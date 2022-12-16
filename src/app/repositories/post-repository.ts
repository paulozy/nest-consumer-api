import { Post } from '../entities/Post';

export abstract class IPostRepository {
  abstract create(post: Post): Promise<void>;
}
