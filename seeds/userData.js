const { User } = require('../models');

const userData = [
    {
      username: "Sal",
      email: "sal@hotmail.com",
      password: "p4ssword12345"
    },
    {
      username: "Lernantino",
      email: "lernantino@gmail.com",
      password: "pass12345"
    },
    {
      username: "Amiko",
      email: "amiko2k20@aol.com",
      password: "word12345"
    }
  ]
  
const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;