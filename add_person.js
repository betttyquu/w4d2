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

// function addPeople{}
knex('famous_people')
    .insert({
        first_name: process.argv.slice(2)[0], 
        last_name: process.argv.slice(2)[1],
        birthdate: process.argv.slice(2)[2]
    })
    .asCallback(function(err, res) {
        if (err) return console.log(err);
        console.log(res);
    })
   



