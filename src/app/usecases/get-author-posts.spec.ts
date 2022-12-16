import { InMemoryPostRepository } from '../../../test/repositories/in-memory-post-repository';
import { Post } from '../entities/Post';
import { CreatePost } from './create-post';
import { GetAuthorPosts } from './get-author-posts';

describe('Get author posts', () => {
  test('should be able to get all author posts', async () => {
    const postRepository = new InMemoryPostRepository();
    const createPost = new CreatePost(postRepository);
    const getAuthorPosts = new GetAuthorPosts(postRepository);

    await createPost.execute(
      new Post({
        author: 'John Doe',
        title: 'My first post',
        content: 'Hello world!',
      }),
    );

    await createPost.execute(
      new Post({
        author: 'John Doe',
        title: 'My first post',
        content: 'Hello world!',
      }),
    );

    await createPost.execute(
      new Post({
        author: 'Mary Doe',
        title: 'My first post',
        content: 'Hello world!',
      }),
    );

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
