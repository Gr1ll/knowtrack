import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserEntity } from 'src/entity/user.entity';
import { UserService } from 'src/services/user.service';

@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [UserEntity])
  async users() {
    return await this.userService.findMany();
  }

  @Query(() => UserEntity, { nullable: true })
  async user(
    @Args('id', { nullable: true }) id?: string,
    @Args('email', { nullable: true }) email?: string,
  ) {
    return this.userService.findUnique(id ? { id } : { email });
  }

  @Mutation(() => UserEntity)
  async createUser(@Args('email') email: string) {
    return this.userService.create({ email });
  }
}
