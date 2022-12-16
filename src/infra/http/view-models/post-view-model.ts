import { Post } from '@app/entities/Post';

export class PostViewModel {
  static toHTTP(post: Post) {
    return {
      id: post.id,
      author: post.author,
      title: post.title,
      content: post.content,
    };
  }
}
