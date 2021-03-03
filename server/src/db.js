import knex from 'knex'
import { Model } from 'objection'
import config from '../knexfile'
export const db = knex(config[process.env.NODE_ENV || 'development'])

Model.knex(db)

export class SpaceCenter extends Model {
  static get tableName() {
    return 'space_center'
  }
}

export class SpaceCenterList extends Model {
  static get tableName() {
    return 'space_center'
  }
}

export class Planet extends Model {
  static get tableName() {
    return 'planet'
  }
}

export class Flight extends Model {
  static get tableName() {
    return 'flight'
  }
}
