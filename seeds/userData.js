const { User } = require('../models');

const userData =
[
    {
      "name": "Sal",
      "email": "sal@hotmail.com",
      "password": "p4ssword12345"
    },
    {
      "name": "Lernantino",
      "email": "lernantino@gmail.com",
      "password": "pass12345"
    },
    {
      "name": "Amiko",
      "email": "amiko2k20@aol.com",
      "password": "word12345"
    }
  ]
  
const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;