import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TopicEntity } from 'src/entity/topic.entity';
import { TopicService } from 'src/services/topic.service';

@Resolver('Topic')
export class TopicResolver {
  constructor(private readonly topicService: TopicService) {}

  @Query(() => [TopicEntity])
  async topics() {
    return await this.topicService.findMany();
  }

  @Query(() => TopicEntity, { nullable: true })
  async topic(@Args('id', { nullable: true }) id?: string) {
    return this.topicService.findUnique({ id });
  }

  @Mutation(() => TopicEntity)
  async createTopic(
    @Args('title') title: string,
    @Args('description') description: string,
    @Args('userId') userId: string,
  ) {
    return this.topicService.create({
      title,
      description,
      user: { connect: { id: userId } },
    });
  }
}
