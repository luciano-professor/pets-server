const knex = require('../database/connection');

module.exports = {
  //Listar todos os pets
  async index(request, response) {
    const pets = await knex('pets')
      .leftOuterJoin('photos', 'photos.pet_id', '=', 'pets.id')
      .select(['pets.*', 'photos.path'])
      .groupBy('pets.id');

    return response.json(pets);
  },

  async photos(request, response) {
    const { id } = request.params;

    const pets = await knex('photos').select('*').where('pet_id', id);

    return response.json(pets);
  },

  //Cadastrar pet
  async create(request, response) {
    const { name, donor, whatsapp, infos, type_id } = request.body;

    const trx = await knex.transaction();

    const [id] = await trx('pets').insert({
      name,
      donor,
      whatsapp,
      infos,
      type_id,
    });

    // console.log(request.files);

    if (request.files && request.files.length > 0) {
      const images = request.files.map((image) => {
        return { path: image.filename, pet_id: id };
      });

      await trx('photos').insert(images);
    }

    trx.commit();

    return response.status(201).json({ message: 'Sucesso ao cadastrar o pet' });
  },
};
