exports.up = function(knex, Promise) {
    return knex.schema.createTable('TB_USUARIOS_PERFIS', table => {
        table.integer('usuario_id').unsigned()
        table.integer('perfil_id').unsigned()
        table.foreign('usuario_id').references('TB_USUARIOS.id')
        table.foreign('perfil_id').references('TB_PERFIS.id')
        table.primary(['usuario_id', 'perfil_id'])
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('TB_USUARIOS_PERFIS')
};
