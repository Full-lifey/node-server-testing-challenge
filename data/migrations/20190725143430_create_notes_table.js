exports.up = function(knex) {
  return knex.schema.createTable('notes', tbl => {
    tbl.increments();
    tbl.string('note').notNullable();
    tbl.string('topic');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('notes');
};
