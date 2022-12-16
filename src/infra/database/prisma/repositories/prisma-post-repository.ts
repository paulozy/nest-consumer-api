import { Post } from '@app/entities/Post';
import { IPostRepository } from '@app/repositories/post-repository';
import { Injectable } from '@nestjs/common';
import { PrismaPostMapper } from '../mappers/prisma-post-mapper';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaPostRepository implements IPostRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findByAuthorName(author: string): Promise<Post[] | null> {
    const posts = await this.prisma.post.findMany({
      where: {
        author,
      },
    });

    return posts.map((post) => {
      return PrismaPostMapper.toDomain(post);
    });
  }

  async create(post: Post): Promise<void> {
    const { author, content, id, title } = post;

    await this.prisma.post.create({
      data: {
        id,
        author,
        title,
        content,
      },
    });
  }
}
