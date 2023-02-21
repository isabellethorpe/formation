// import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
// import React from "react";
// import { PropsWithChildren } from "react";

// const GRAPHQL_ENDPOINT = 'https://localhost:1337/graphql';

// const StrapiApolloProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
//     // Creating apollo client with graphql endpoint
//   const client = new ApolloClient({
//     uri: GRAPHQL_ENDPOINT,
//     cache: new InMemoryCache(),
//   });

//   // returns native apollo provider with reference to the client 
//   return <ApolloProvider client={client}>
//     {children}
//   </ApolloProvider>
// };

// export default StrapiApolloProvider;


import { ApolloClient, InMemoryCache } from '@apollo/client'

const GRAPHQL_ENDPOINT = 'https://localhost:1337/graphql';


const apolloClient = new ApolloClient({
  ssrMode: typeof window === 'undefined',
  uri: GRAPHQL_ENDPOINT,
  cache: new InMemoryCache(),
})

export default apolloClient;
