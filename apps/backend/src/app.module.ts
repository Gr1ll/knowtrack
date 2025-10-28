import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { UserResolver } from './resolvers/user.resolver';
import { UserService } from './services/user.service';
import { PrismaService } from './services/prisma.service';
import { TopicResolver } from './resolvers/topic.resolver';
import { TopicService } from './services/topic.service';
import { EntryResolver } from './resolvers/entry.resolver';
import { EntryService } from './services/entry.service';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),

      //eslint-disable-next-line  @typescript-eslint/no-unsafe-assignment
      context: ({ req }) => ({ req }),
    }),
  ],
  providers: [
    PrismaService,
    UserResolver,
    UserService,
    TopicResolver,
    TopicService,
    EntryResolver,
    EntryService,
  ],
})
export class AppModule {}
