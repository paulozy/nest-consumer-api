import { Post } from './Post';

describe('Post', () => {
  test('should be able to create a new post', () => {
    const post = new Post({
      author: 'John Doe',
      title: 'My first post',
      content: 'Hello world!',
    });

    expect(post).toBeTruthy();
  });
});
