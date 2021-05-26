import { gql, IResolvers, makeExecutableSchema } from "apollo-server-express";

export const typeDefs = gql`
type People {
  name: String!
  height: String!
  mass: String!
  gender: String!
  homeworld: String!
  hair_color: String!
  skin_color: String!
  eye_color: String!
}


type PeopleResponse {
  count: Int!
  previous: String
  next: String
  results: [People]!
}

type Query {
  allPeople(page: Int): PeopleResponse
  personDetails(search: String!): PeopleResponse
}
`;

const resolvers: IResolvers = {
  Query: {
    allPeople(_, { page }, {dataSources}) {
      return dataSources.StarWarsAPI.AllPeople(page)
    },
    personDetails(_, { search }, {dataSources}) {
        return dataSources.StarWarsAPI.SearchName(search)
    },
  },
};

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})