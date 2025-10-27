import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class UserEntity {
  @Field(() => ID)
  id: string;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  wallet?: string;

  /*@Field({ nullable: true })
  topics?: Topic[];*/

  @Field()
  createdAt: Date;
}
