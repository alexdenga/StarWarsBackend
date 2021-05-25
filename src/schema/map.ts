import { gql } from "apollo-server-express";

export const Map = gql`
  type Query {
    helloWorld: String!
  }
`;