require('dotenv').config();

/*const knex = require('knex')({
  client: 'mysql2',
  connection: {
    host : '148.113.153.60',
    port : 3306,
    user : 'igrej3682_ibadejuf',
    password : 'ibadejuf2024',
    database : 'igrej3682_ibadejuf'
  }
});
*/

const knex = require('knex')({
  client: 'mysql2',
  connection: {
    host : '168.75.108.235',
    port : 3306,
    user : 'igrej3682_ibadejuf',
    password : 'ibadejuf2024',
    database : 'igrej3682_ibadejuf'
  }
});

module.exports = knex;

  