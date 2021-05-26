import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import depthLimit from 'graphql-depth-limit';
import { createServer } from 'http';
import compression from 'compression';
import cors from 'cors';
import helmet from 'helmet';
import SCHEMA from './schema';
import { dataSources } from './dataSource';
const app = express();
const server = new ApolloServer({
  schema: SCHEMA,
  dataSources,
  validationRules: [depthLimit(7)],
  introspection: true,
  playground: true
});
const corsOpt = cors({ origin: true })
app.use('*', corsOpt);
app.use(helmet({ contentSecurityPolicy: (process.env.NODE_ENV === 'production') ? undefined : false }));
app.use(compression());
server.applyMiddleware({ app, path: '/graphql' });
const httpServer = createServer(app);
httpServer.listen({ port: 3000 }, (): void => console.log(`SERVER running on http://localhost:3000/graphql`));