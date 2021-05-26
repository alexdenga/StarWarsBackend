import { RESTDataSource } from 'apollo-datasource-rest';
import camelCaseKeys from 'camelcase-keys';

const API_URL = 'https://swapi.dev/api/people/';

export class StarWarsAPI extends RESTDataSource {
    constructor() {
        super()
        this.baseURL = API_URL
    }

    async AllPeople(name: string) {
        const data = await this.get('?', {search: name});
        return camelCaseKeys(data, { deep: true });
    }

    async SearchName(name: string) {
        const data = await this.get('?', {search: name});
        return camelCaseKeys(data, { deep: true });
    }

    async Pages(page_number: number) {
        const data = await this.get('?', {page: page_number});
        return camelCaseKeys(data, { deep: true });
    }
}

export const dataSources = () => ({ StarWarsAPI: new StarWarsAPI() })