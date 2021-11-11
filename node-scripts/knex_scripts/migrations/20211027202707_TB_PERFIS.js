
exports.up = function(knex, Promise) {
    return knex.schema.createTable('TB_PERFIS', table => {
        table.increments('id').primary()
        table.string('nome').notNull().unique()
        table.string('rotulo').notNull()
    }).then(function () {
        return knex('perfis').insert([
            { nome: 'comum', rotulo: 'Comum' },
            { nome: 'admin', rotulo: 'Administrador' },
        ])
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('TB_PERFIS')
};
