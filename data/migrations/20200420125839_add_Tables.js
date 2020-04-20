
exports.up = function(knex) {
  return knex.schema.createTable("Users",tbl=>{
    tbl.increments("id");
    tbl.string("username",128).notNullable().unique().index();
    tbl.string("password",128).notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("Users");
};
