import { Flight, Planet, SpaceCenter } from './db'
import typeDefs from '../schema/schema.graphql'

export const resolvers = {
  Planet: {
    spaceCenters: async (planet, args) => {
      const query = SpaceCenter.query().where({ id: planet.id })
      return query
    },
  },
  SpaceCenter: {
    planet: async (spaceCenter, args) => {
      const query = Planet.query().findOne({ id: spaceCenter.planet_id})
      return query
    },
  },
  Flight: {
    launchSite: async (flight, args) => {
      const query = SpaceCenter.query().findOne({ id: flight.launchSite })
      return query
    },
    landingSite: async (flight, args) => {
      const query = SpaceCenter.query().findOne({ id: flight.landingSite })
      return query
    },
  },
  Mutation: {
    scheduleFlight: async (parent, { code, seatCount }) => {
      const isAlreadyInBDD = await Flight.query().findOne({ code })
      if (isAlreadyInBDD) {
        throw new Error(`Can't add flight ${code}, it already exist.`)
      }
      return Flight.query().insert({  code, seatCount })
    }
  },
  Query: {
    spaceCenter: async (_,args) => SpaceCenter.query().findOne({ uid: args.id }),
    spaceCenters: async _ => ({nodes:SpaceCenter.query().select('*').from('space_center')}),
    planet: async (_,args) => Planet.query().findOne({ id: args.id }),
    planets: async _ => Planet.query().select('*').from('planet'),
    flight: async (_,args) => Flight.query().findOne({ id: args.id }),
    flights: async _ =>  ({nodes:Flight.query().select('*').from('flight')}),
  }

}

const schema = ({
  typeDefs,
  resolvers
})

export default schema

 
