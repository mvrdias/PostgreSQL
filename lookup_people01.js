// require('dotenv').config();
const settings = require("./settings"); // settings.json

const knex = require('knex')({
  client: 'pg',
  connection: {
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
},
  searchPath: 'knex,public'
});


const input = process.argv.slice(2);


knex.select().from('famous_people').where('last_name' , input[0]).then((results) => {
  results.forEach((result) => {
    console.log(result);
  });
}).catch((error) => {
  // handle error
}).finally(function() {
  knex.destroy();
});
