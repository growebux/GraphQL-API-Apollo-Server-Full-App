const { ApolloServer } = require("apollo-server");

// Schema
const typeDefs = `
    type Query{
        "Count of total days skied during a season"
        totalDays: Int
    }
`;
//Resolvers
const resolvers = {
  Query: {
    totalDays: () => 100,
  },
};

// ApolloServer Constructor
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server
  .listen()
  .then(({ url }) => `GraphQL server listening on ${url}`)
  .then(console.log)
  .catch(console.error);
