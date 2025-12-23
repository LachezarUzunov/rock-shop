/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('products').del()
  await knex('products').insert([
    { name: 'AC/DC Thunderstruck T-Shirt', price: 24.99 },
    { name: 'Metallica Master of Puppets Mug', price: 14.99 },
    { name: 'Guns N’ Roses Classic Logo Hoodie', price: 49.99 }
  ]);
};
