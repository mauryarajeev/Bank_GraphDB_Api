
const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type Bank {
    name: String
  }

  type Branch {
    branch: String
    bank: Bank
    ifsc: String
  }

  type Query {
    branches: [Branch]
  }
`;

const resolvers = {
  Query: {
    branches: () => {
      // This is where you would fetch the data from the database
      // and return it to the client
      return [
        {
          branch: "branch1",
          bank: { name: "bank1" },
          ifsc: "ifsc1"
        },
        {
          branch: "branch2",
          bank: { name: "bank2" },
          ifsc: "ifsc2"
        }
      ];
    }
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});


