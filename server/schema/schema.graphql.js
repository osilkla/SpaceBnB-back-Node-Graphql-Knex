const {  gql } = require('apollo-server-koa');

const schema =  gql`type Booking {
  id: ID!
  flight: Flight!
  seatCount: Int!
  email: String!
}

type BookingList {
  pagination: PaginationInfo!
  nodes: [Booking!]!
}

scalar Date

scalar DateTime

type Flight {
  id: ID!
  code: String!
  launchSite: SpaceCenter!
  landingSite: SpaceCenter!
  departureAt: DateTime
  seatCount: Int!
  availableSeats: Int!
}

input FlightBookingInput {
  seatCount: Int!
  flightId: ID!
  email: String!
}

type FlightList {
  pagination: PaginationInfo!
  nodes: [Flight!]!
}

type Mutation {
  scheduleFlight(flightInfo: ScheduleFlightInput!): Flight!
  bookFlight(bookingInfo: FlightBookingInput): Booking!
}

type PaginationInfo {
  total: Int!
  page: Int!
  pageSize: Int!
}

type Planet {
  id: ID!
  name: String!
  code: String!
  spaceCenters(limit: Int = 10): [SpaceCenter!]!
}

type Query {
  planets(limit: Int = 10): [Planet!]!
  spaceCenters(page: Int = 0, pageSize: Int = 10): SpaceCenterList!
  spaceCenter(id: ID, uid: String): SpaceCenter
  planet(id: ID): Planet
  flights(
    from: ID
    to: ID
    seatCount: Int
    departureDay: Date
    page: Int = 1
    pageSize: Int = 10
  ): FlightList!
  flight(id: ID!): Flight
  booking(id: ID!): Booking
  bookings(email: String!, page: Int = 1, pageSize: Int = 10): BookingList!
}

input ScheduleFlightInput {
  launchSiteId: ID!
  landingSiteId: ID!
  departureAt: DateTime!
  seatCount: Int!
}

type SpaceCenter {
  id: ID!
  uid: String!
  name: String!
  description: String
  latitude: Float
  longitude: Float
  planet: Planet!
}

type SpaceCenterList {
  pagination: PaginationInfo!
  nodes: [SpaceCenter!]!
}
`
export default schema