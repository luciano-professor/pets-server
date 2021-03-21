const knex = require('knex');
const path = require('path');

//const configuration = require('../../knexfile')
//const config = process.env.NODE_ENV == 'test' ? configuration.test : configuration.development
//const connection = knex(config)

const connection = knex({
  client: 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, 'database.sqlite'),
  },
  useNullAsDefault: true,
});

module.exports = connection;
