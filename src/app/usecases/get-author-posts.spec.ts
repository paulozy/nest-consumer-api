import { makePost } from '@test/factories/post-factory';
import { InMemoryPostRepository } from '@test/repositories/in-memory-post-repository';
import { CreatePost } from './create-post';
import { GetAuthorPosts } from './get-author-posts';

describe('Get author posts', () => {
  test('should be able to get all author posts', async () => {
    const postRepository = new InMemoryPostRepository();
    const createPost = new CreatePost(postRepository);
    const getAuthorPosts = new GetAuthorPosts(postRepository);

    await createPost.execute(makePost({ author: 'John Doe' }));
    await createPost.execute(makePost({ author: 'John Doe' }));
    await createPost.execute(makePost({ author: 'Mary Doe' }));

    const { posts } = await getAuthorPosts.execute({
      author: 'John Doe',
    });

    expect(posts).toHaveLength(2);
    expect(posts).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ author: 'John Doe' }),
        expect.objectContaining({ author: 'John Doe' }),
      ]),
    );
  });
});
