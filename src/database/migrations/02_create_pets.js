exports.up = function (knex) {
  return knex.schema.createTable('pets', function (table) {
    table.increments('id').primary();

    table.string('name').notNullable();
    table.string('donor').notNullable();
    table.string('whatsapp').notNullable();
    table.string('infos').notNullable();

    table.string('type_id').notNullable();

    table.foreign('type_id').references('id').inTable('types');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('pets');
};
