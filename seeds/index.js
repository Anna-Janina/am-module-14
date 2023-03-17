const seedComments = require('./comment-seeds');
const seedPosts = require('./post-seeds');
const seedUser = require('./user-seeds');

const sequelize = require('../config/connection'); 

const seedAll = async () => {
    await sequelize.sync({ force: true });
    await seedComments();
    await seedPosts();
    await seedUser();
};

seedAll();