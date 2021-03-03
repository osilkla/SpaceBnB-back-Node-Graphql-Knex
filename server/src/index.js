import Koa from 'koa';
import schema  from'./schema'

const { ApolloServer } = require('apollo-server-koa');

const server = new ApolloServer(schema);

const app = new Koa();
const PORT = 3000;


server.applyMiddleware({ app });
 

app.listen({ port: PORT }, () =>
  console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`),
);