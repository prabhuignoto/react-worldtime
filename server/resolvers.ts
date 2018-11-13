export default {
  Query: {
    async getTimeZones(obj: any, args: any, { dataSources }: any, info: any) {
      return dataSources.worldTimeAPI.getTimeZones();
    },
    async getTimeZonesByName(obj: any, {name}: any, { dataSources }: any, info: any) {
      return dataSources.worldTimeAPI.getTimeZonesByName(name);
    },
    async getTimeZoneData(obj: any, {timeZone}: any, { dataSources }: any, info: any) {
      return dataSources.worldTimeAPI.getTimeZonesByName(timeZone);
    }
  }
}