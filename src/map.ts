import { gql } from "apollo-server-express";

export const Map = gql`
type People {
  name: String
  height: String
  mass: String
  gender: String
  homeworld: String
}

type Page {
  page: Int
}

type Query {
  allPeople: [People]!
  peoplePages(page: Int!): People
  personDetails(name: String!): People
}
`;