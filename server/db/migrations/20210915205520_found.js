exports.up = function(knex) {
    return knex.schema.createTable('found', table => {
        table.increments('id')
        table.string('species')
        table.string('photo')
        table.integer('user_id').references('users.id')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('found')
};
