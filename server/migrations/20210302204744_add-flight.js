
exports.up = function(knex, Promise) {
  return knex.schema.createTable('planet', table => {
    table.increments('id').primary()
    table.string('name')
    table.string('code')   
  })
  .createTable('space_center', (table) => {
    table.increments()
    table.text('uid')
    table.text('name')
    table.text('description')
    table.float('latitude')
    table.float('longitude') 
    table
      .integer('planet_id')
      .references('id')
      .inTable('planet')
  })
  .createTable('flight', (table) => {
    table.increments()
    table.text('code')
    table.dateTime('departureAt')
    table.integer('seatCount')
    table.integer('availableSeats') 
    table
      .integer('launchSite')
      .references('id')
      .inTable('space_center')
    table
      .integer('landingSite')
      .references('id')
      .inTable('space_center')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('flight')
  .dropTable('space_center')
  .dropTable('planet');  
};
