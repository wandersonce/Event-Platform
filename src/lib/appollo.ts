import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-ca-central-1.graphcms.com/v2/cl4odq1cq1xgy01z73w6oemre/master',
  cache: new InMemoryCache()
})