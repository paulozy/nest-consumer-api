import { Post } from '@app/entities/Post';
import { Post as RawPost } from '@prisma/client';

export class PrismaPostMapper {
  static toDomain(raw: RawPost) {
    return new Post(
      {
        author: raw.author,
        title: raw.title,
        content: raw.content,
      },
      raw.id,
    );
  }
}
