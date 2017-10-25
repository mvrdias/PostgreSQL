const pg = require("pg");
const settings = require("./settings"); // settings.json

const input = process.argv.slice(2);

const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});





client.connect((err) => {

  if (err) {
    return console.error("Connection Error", err);
  }

  console.log (input);

  client.query("SELECT * FROM famous_people WHERE last_name = $1", input ,(error, results) => {
  console.log(results.rows);

  });
});