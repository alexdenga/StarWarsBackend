import 'graphql-import-node';
import { Map } from './map';
import { makeExecutableSchema } from 'graphql-tools';
import resolvers from '../resolver';
import { GraphQLSchema } from 'graphql';
const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs: Map,
  resolvers,
});
export default schema;