import { RESTDataSource } from 'apollo-datasource-rest';
import camelCaseKeys from 'camelcase-keys';

const API_URL = 'https://swapi.dev/api/';
export class StarWarsAPI extends RESTDataSource {
    constructor() {
        super()
        this.baseURL = API_URL
    }
    async allPeople() {
        const data = await this.get('people');
        return camelCaseKeys(data, {deep: true});
    }
    async allPeopleByPage(page: number) {
        const data = await this.get('people', {page: page});
        return camelCaseKeys(data, {deep: true});
    }
    async SearchName(name: string) {
        const data = await this.get('people', {search: name});
        return camelCaseKeys(data, {deep: true});
    }
}
export const dataSources = () => ({ StarWarsAPI: new StarWarsAPI() })