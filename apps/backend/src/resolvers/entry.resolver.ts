import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { EntryEntity } from 'src/entity/entry.entity';
import { EntryService } from 'src/services/entry.service';

@Resolver('Entry')
export class EntryResolver {
  constructor(private readonly entryService: EntryService) {}

  @Query(() => [EntryEntity])
  async entries() {
    return await this.entryService.findMany();
  }

  @Query(() => EntryEntity, { nullable: true })
  async entry(@Args('id', { nullable: true }) id?: string) {
    return this.entryService.findUnique({ id });
  }

  @Mutation(() => EntryEntity)
  async createEntry(
    @Args('topic') topic: string,
    @Args('content') content: string,
  ) {
    return this.entryService.create({
      topic: { connect: { id: topic } },
      content,
    });
  }
}
