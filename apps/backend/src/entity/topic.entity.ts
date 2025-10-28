import { ObjectType, Field, ID } from '@nestjs/graphql';
import { EntryEntity } from './entry.entity';

@ObjectType()
export class TopicEntity {
  @Field(() => ID)
  id: string;

  @Field()
  userId: string;

  @Field()
  title: string;

  @Field({ nullable: true })
  description?: string;

  @Field(() => [EntryEntity])
  entries: EntryEntity[];

  @Field()
  createdAt: Date;
}
