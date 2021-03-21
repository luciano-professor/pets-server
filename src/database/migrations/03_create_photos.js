exports.up = function (knex) {
  return knex.schema.createTable('photos', function (table) {
    table.increments('id').primary();

    table.string('path').notNullable();

    table.string('pet_id').notNullable();
    table.foreign('pet_id').references('id').inTable('pets');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('photos');
};
