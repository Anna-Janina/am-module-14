const express = require('express') //Adding Express module
const exphbs = require('express-handlebars') //Adding express-handlebar module
const session = require('express-session'); //Adding express session module
const sequelize = require('./config/connection'); // Adding MySQL daatbase connection
const path = require('path'); //Adding path module
require('dotenv').config(); // Adding dotenv module
const routes = require('./controller'); // Importing routes

//Initializing Express
const app = express();

//Defining PORT which will be used by the app
const PORT = process.env.PORT || 3001;

//Defining session options and config
const sess = {
    secret: 'Secret session',
    cookie: {},
    resave: false,
    saveUninitialized: true,
  };

  //Using session variable in middleware
app.use(session(sess));

//Syncing sequzlize with the database
sequelize.sync().then(() => {
    app.listen(PORT, () => {
      console.log(`App listening on port ${PORT}!`); //Listen on 'PORT'
    });
    });