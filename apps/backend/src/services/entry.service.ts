import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Entry, Prisma } from 'generated/prisma';

@Injectable()
export class EntryService {
  constructor(private prisma: PrismaService) {}

  async findMany(): Promise<Entry[]> {
    return await this.prisma.entry.findMany();
  }

  async findUnique(where: Prisma.EntryWhereUniqueInput): Promise<Entry | null> {
    return this.prisma.entry.findUnique({ where });
  }

  async create(data: Prisma.EntryCreateInput): Promise<Entry> {
    return this.prisma.entry.create({ data });
  }
}
