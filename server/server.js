const {ApolloServer, gql} = require('apollo-server')

const typeDefs = gql`
  type Query {
    greeting: String
  }
`

const resolvers = {
  Query: {
    greeting: () => 'Hey this is GraphQL party',
  }
}

const server = new ApolloServer({typeDefs, resolvers})

server
  .listen({port: 9000})
  .then(({url}) => console.log(`Server running here ${url} g`))