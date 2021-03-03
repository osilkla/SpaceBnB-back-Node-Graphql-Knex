import { resolvers } from './schema'
import { db } from './db'

beforeAll(async () => {
  await db.migrate.latest()
})

afterAll(async () => {
  await db.migrate.rollback()
  await db.destroy()
})

beforeEach(async () => {
  await db.seed.run()
})

afterEach(async () => {
  await db.migrate.rollback()
  await db.migrate.latest()
})


test('planet.spaceCenter returns spaceCenter of given planet', async () => {
  const expected = [{"description": "Aut id sit et. Animi et minus et quia necessitatibus. Aut et perspiciatis veritatis et ut dolores asperiores fugiat.", "id": 1, "latitude": -35.9083, "longitude": -34.7214, "name": "Hintz Union Space Center", "planet_id": 1, "uid": "da9c2dee-3b38-4d21-b911-083599c05dad"}]
  expect(await resolvers.Planet.spaceCenters({ id: 1 })).toEqual(expected)
})

test('SpaceCenter.planet return planet of given SP', async () => {
  const expected = {"code": "MER", "id": 1, "name": "Mercury"}
  expect(await resolvers.SpaceCenter.planet({ planet_id: 1 })).toEqual(expected)
})

test('Flight.launchsite returns spaceCenter', async () => {
  const expected = {"description": "Aut id sit et. Animi et minus et quia necessitatibus. Aut et perspiciatis veritatis et ut dolores asperiores fugiat.", "id": 1, "latitude": -35.9083, "longitude": -34.7214, "name": "Hintz Union Space Center", "planet_id": 1, "uid": "da9c2dee-3b38-4d21-b911-083599c05dad"}
  expect(await resolvers.Flight.launchSite({ launchSite: 1 })).toEqual(expected)
})

test('Flight.landingSite returns spaceCenter', async () => {
  const expected = {"description": "Aut id sit et. Animi et minus et quia necessitatibus. Aut et perspiciatis veritatis et ut dolores asperiores fugiat.", "id": 1, "latitude": -35.9083, "longitude": -34.7214, "name": "Hintz Union Space Center", "planet_id": 1, "uid": "da9c2dee-3b38-4d21-b911-083599c05dad"}
  expect(await resolvers.Flight.landingSite({ landingSite: 1 })).toEqual(expected)
})
 

test('scheduleFlight add a new flight', async () => {
  const expected = await resolvers.Mutation.scheduleFlight(null, {
    code: "123456789456789123",
    departureAt: "2020-01-01T00:00:00Z",
    seatCount: 10,
    launchSite:2,
    landingSite:1
  })
  expect(expected).toHaveProperty('seatCount', 10)
  expect(expected).toHaveProperty('code', '123456789456789123')
})
test('scheduleFlight should throw error if flight already exist', async () => {
  expect.assertions(1)

  await expect(resolvers.Mutation.scheduleFlight(null, {
    code: "93913a8c3aeb023aec2c7122c7a407",
    departureAt: "2020-01-01T00:00:00Z",
    seatCount: 10,
    launchSite:2,
    landingSite:1
  })).rejects.toMatchObject({
    message: "Can't add flight 93913a8c3aeb023aec2c7122c7a407, it already exist."
  })
})
 

 
 
