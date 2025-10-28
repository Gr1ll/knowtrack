import { ObjectType, Field, ID } from '@nestjs/graphql';
import { TopicEntity } from './topic.entity';

@ObjectType()
export class UserEntity {
  @Field(() => ID)
  id: string;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  wallet?: string;

  @Field(() => [TopicEntity], { nullable: true })
  topics?: TopicEntity[];

  @Field()
  createdAt: Date;
}
