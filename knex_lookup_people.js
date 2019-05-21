const settings = require('./settings');
const knex = require('knex')({
  client: 'pg',
  connection: {
    host : settings.hostname,
    user : settings.user,
    password : settings.password,
    database : settings.database
  }
});

const name = process.argv[2];

knex.select('first_name', 'last_name', 'birthdate').from('famous_people').where({first_name: name}).orWhere({last_name: name})
  .asCallback(function(err, rows) {
    if (err) return console.error(err);
    rows.forEach((element,index) => {
        console.log(`- ${index + 1}: ${element.first_name} ${element.last_name}, born '${element.birthdate.toLocaleDateString()}'`);
      });
    knex.destroy();
  });


  module.exports = {
    client: 'pg',
    connection: process.argv.slice(2)[0]
  };