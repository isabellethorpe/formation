import { ApolloServer, gql } from 'apollo-server-micro'

const typeDefs = gql`
  type Query {
    hello: String
  }
`

const resolvers = {
  Query: {
    hello: () => {
      return 'Hello world!'
    }
  }
}

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers
})

export const config = {
  api: {
    bodyParser: false
  }
}

export default apolloServer.createHandler({ path: '/api/graphql' })