const knex = require('../database/connection');

module.exports = {
  //Listar todos os pets
  async index(request, response) {
    const types = await knex('types').select('*');

    return response.json(types);
  },
};
