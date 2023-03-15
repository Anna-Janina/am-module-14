const express = require('express') //Adding Express module
const exphbs = require('express-handlebars') //Adding express-handlebar module
const session = require('express-session'); //Adding express session module
const sequelize = require('./config/connection'); // Adding MySQL daatbase connection
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const path = require('path'); //Adding path module
require('dotenv').config(); // Adding dotenv module


//Initializing Express
const app = express();

//Defining PORT which will be used by the app
const PORT = process.env.PORT || 3001;

//Defining session options and config
const sess = {
    secret: 'Secret session',
    cookie: {
        maxAge: 300000,
        httpOnly: true,
        secure: false, 
        sameSite: 'strict',
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
  };

  //Using session variable in middleware
app.use(session(sess));
const hbs = exphbs.create({})
app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))
app.use(require('./controllers'));

app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`)
    sequelize.sync({ force: false})
})
