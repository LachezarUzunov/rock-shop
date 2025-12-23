/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {first_name: 'John', last_name: 'Doe', email: 'rockfan@gmail.com'},
    {first_name: 'Iron', last_name: 'Man', email: 'metalhead@gmail.com'},
    {first_name: 'Man', last_name: 'Owar', email: 'myrockmaster@gmail.com'}
  ]);
};
