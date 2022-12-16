import { InMemoryPostRepository } from '../../../test/repositories/in-memory-post-repository';
import { GetAuthorPosts } from './get-author-posts';

describe('Get author posts', () => {
  test('should be able to get all author posts', async () => {
    const postRepository = new InMemoryPostRepository();
    const getAuthorPosts = new GetAuthorPosts(postRepository);
  });
});
