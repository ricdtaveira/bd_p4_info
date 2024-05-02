
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('TB_PERFIS').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, colName: 'Convidado'},
        {id: 2, colName: 'Faturamento'},
        {id: 3, colName: 'rowValue3'}
      ]);
    });
};
