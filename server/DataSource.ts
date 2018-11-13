import { RESTDataSource } from "apollo-datasource-rest";

export default class WorldTimeDataSource extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.API_URL as string;
  }

  async getTimeZones() {
    try {
      const response = await this.get("/timezone");
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async getTimeZonesByName(name: string) {
    try {
      const response = await this.get(`/timezone/${name}`);
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async getTimeZoneData(timeZone: string) {
    try {
      const [zone, location] = timeZone.split("/")
      const response = await this.get(`/timezone/${zone}/${location}`);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
}
