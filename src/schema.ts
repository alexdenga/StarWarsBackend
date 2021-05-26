import { gql, IResolvers, makeExecutableSchema } from "apollo-server-express";

export const typeDefs = gql`
type People {
  name: String!
  height: String!
  mass: String!
  gender: String!
  homeworld: String!
}

type PeopleResponse {
  count: Int!
  previous: String
  next: String
  results: [People]!
}

type Query {
  allPeople: PeopleResponse
  allPeopleByPage(page: Int): PeopleResponse
  personDetails(search: String!): PeopleResponse
}
`;

const resolvers: IResolvers = {
  Query: {
    allPeople(_, {}, {dataSources}) {
      return dataSources.StarWarsAPI.allPeople()
    },
    allPeopleByPage(_, { page }, {dataSources}) {
      return dataSources.StarWarsAPI.allPeopleByPage(page)
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