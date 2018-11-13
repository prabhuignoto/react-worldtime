export default `

  type timezoneData {
    week_number: Int!
    utc_offset: String!
    unixtime: Int!
    timezone: String!
    dst_until: String
    dst_from: String
    dst: Boolean
    day_of_year: Int!
    day_of_week: Int!
    datetime: String!
    abbreviation: String
  }

  type Query {
    getTimeZones: [String!]!
    getTimeZonesByName(name: String!): [String!]!
    getTimeZoneData(timeZone: String!): timezoneData!
  }

`