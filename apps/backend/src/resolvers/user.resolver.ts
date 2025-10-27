import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from 'src/services/user.service';

@Resolver('User')
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => [Object])
  async users() {
    return await this.userService.findMany();
  }

  @Query(() => Object, { nullable: true })
  async user(@Args('id') id: string) {
    return this.userService.findUnique({ id });
  }

  @Mutation(() => Object)
  async createUser(@Args('email') email: string) {
    return this.userService.create({ email });
  }
}
