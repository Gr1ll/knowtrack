import { ApolloClient, InMemoryCache } from "@apollo/client";
import { HttpLink } from "@apollo/client";
import { SetContextLink } from "@apollo/client/link/context";

const httpLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_API_URL + "/graphql",
});

const authLink = new SetContextLink(({ headers }) => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
