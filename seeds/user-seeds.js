const { seedComments, seedPosts, seedUser } = require('../seeds');
const sequelize = require('../config/connection'); 

const seedUser = [
    {
        "name": "Hermine Granger",
        "email": "hermine_granger@gmail.com",
        "password": "herminePotter123"
    },
    {
        "name": "Harry Potter",
        "email": "harry_potter@gmail.com",
        "password": "harryPotter875"
    },
    {
        "name": "Ronald Weasley", 
        "email": "ronald_weasley@gmail.com",
        "password": "ronald_weasley634"
    },
]