import { IPostRepository } from '@app/repositories/post-repository';
import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { PrismaPostRepository } from './prisma/repositories/prisma-post-repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: IPostRepository,
      useClass: PrismaPostRepository,
    },
  ],
  exports: [IPostRepository],
})
export class DatabaseModule {}
