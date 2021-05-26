import { IResolvers } from 'graphql-tools';

const resolverMap: IResolvers = {
  Query: {
    allPeople(_, { page }, {dataSources}) {
      return dataSources.StarWarsAPI.Pages(page)
    },
    peoplePages(_, { page }, {dataSources}) {
        return dataSources.StarWarsAPI.Pages(page)
    },
    personDetails(_, { name }, {dataSources}) {
        return dataSources.StarWarsAPI.SearchName(name)
    },
  },
};
export default resolverMap;