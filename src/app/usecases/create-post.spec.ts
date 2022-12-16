import { InMemoryPostRepository } from '../../../test/repositories/in-memory-post-repository';
import { CreatePost } from './create-post';

describe('Create Post', () => {
  test('should be able to create a post', async () => {
    const postRepository = new InMemoryPostRepository();
    const createPost = new CreatePost(postRepository);

    const { post } = await createPost.execute({
      author: 'John Doe',
      title: 'My first post',
      content: 'Hello world!',
    });

    expect(postRepository.posts).toHaveLength(1);
    expect(postRepository.posts[0]).toEqual(post);
  });
});
