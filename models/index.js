const Comments = require('../models/Comment');
const Posts = require('../models/Post');
const User = require('../models/User');
// const sequelize = require('../config/connection');

Comments.belongsTo(Posts, {
    foreignKey: 'postId',
    onDelete: 'SET NULL'
});

Comments.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'SET NULL'
});

Posts.hasMany(Comments, {
    foreignKey: 'postId',
    onDelete: 'SET NULL'
});

Posts.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'SET NULL'
});

User.hasMany(Comments, {
    foreignKey: 'userId',
    onDelete: 'SET NULL'
});

User.hasMany(Posts, {
    foreignKey: 'userId',
});

module.exports = { Comments, Posts, User };

