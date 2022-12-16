import { IPostProps, Post } from '@app/entities/Post';

type Override = Partial<IPostProps>;

export function makePost(override: Override = {}) {
  return new Post({
    author: 'John Doe',
    title: 'My first post',
    content: 'Hello world!',
    ...override,
  });
}
