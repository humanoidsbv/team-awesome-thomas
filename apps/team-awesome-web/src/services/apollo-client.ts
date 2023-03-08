import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  link: createHttpLink({
    uri: "http://localhost:3333",
  }),
  cache: new InMemoryCache(),
});
