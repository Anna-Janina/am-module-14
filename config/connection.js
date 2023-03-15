//Required dependencies
const Sequelize = require('sequelize'); 
require('dotenv').config(); 

//Defining Sequelize connection options
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: 'us-cdbr-east-06.cleardb.net', //heroku server name
    dialect: 'mysql',
    port: 3306,
  }
);

module.exports = sequelize; //Exporting sequelize connection
