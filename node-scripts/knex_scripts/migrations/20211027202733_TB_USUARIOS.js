
exports.up = function(knex, Promise) {
    return knex.schema.createTable('TB_USUARIOS', table => {
        table.increments('id').primary()
        table.string('nome').notNull()
        table.string('email').notNull().unique()
        table.string('senha', 60)
        table.boolean('ativo')
            .notNull().defaultTo(true)
        table.timestamp('data_criacao')
            .defaultTo(knex.fn.now())
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('TB_USUARIOS')
};