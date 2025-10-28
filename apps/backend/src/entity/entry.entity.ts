import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class EntryEntity {
  @Field(() => ID)
  id: string;

  @Field()
  topicId: string;

  @Field()
  content: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ defaultValue: 0 })
  progress: number;

  @Field()
  createdAt: Date;
}
