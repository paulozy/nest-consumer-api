import { IPostRepository } from '@app/repositories/post-repository';
import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Module({
  providers: [PrismaService],
  exports: [IPostRepository],
})
export class DatabaseModule {}
