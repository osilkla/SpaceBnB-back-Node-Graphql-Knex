module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: process.DB_HOST || 'localhost',
      port: process.env.DB_PORT || 5432,
      user: process.env.DB_USER || 'test',
      password: process.env.DB_PASSWORD || 'test',
      database: process.env.DB_NAME || 'spacetrip'
   }
  },
  test: {
    client: 'pg',
    connection: {
      database: 'spacetrip',
      host: process.DB_HOST || 'localhost',
      port: process.env.DB_PORT || 5432,
      user: process.env.DB_USER || 'test',
      password: process.env.DB_PASSWORD || 'test',
    },
    seeds: {
        directory: `${__dirname  }/seeds`
    }
  }
};
