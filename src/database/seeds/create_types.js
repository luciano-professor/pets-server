exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('types').insert([{ name: 'Cachorro' }, { name: 'Gato' }]);
};
