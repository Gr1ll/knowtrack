import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Prisma, Topic } from 'generated/prisma';

@Injectable()
export class TopicService {
  constructor(private prisma: PrismaService) {}

  async findMany(): Promise<Topic[]> {
    return await this.prisma.topic.findMany();
  }

  async findUnique(where: Prisma.TopicWhereUniqueInput): Promise<Topic | null> {
    return this.prisma.topic.findUnique({ where });
  }

  async create(data: Prisma.TopicCreateInput): Promise<Topic> {
    return this.prisma.topic.create({ data });
  }
}
