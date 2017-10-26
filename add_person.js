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


// knex.select().from('famous_people').where('last_name' , input[0]).then((results) => {
//   results.forEach((result) => {
//     console.log(result);
//   });

//insert into famous_people ("first_name", "last_name", "birthdate") values ("D", "MV", 1809-02-12T00:00:00.000Z);
knex.insert({ first_name: "D", last_name: "MV", birthdate: 1809-02-12 , id: '5'})
  .into("famous_people")
  .then((results)  => {
    results.forEach((result) => {
    console.log(result)});
  });



// }).catch((error) => {
//   // handle error
// }).finally(function() {
//   knex.destroy();
// });
