const Comments = require('../models/Comment');
const Post = require('../models/Post');
const User = require('../models/User');
// const sequelize = require('../config/connection');

Comments.belongsTo(Post, {
    foreignKey: 'postId',
    onDelete: 'SET NULL'
});

// check
Comments.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'SET NULL'
});

Post.hasMany(Comments, {
    foreignKey: 'postId',
    onDelete: 'SET NULL'
});

//check
Post.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'SET NULL'
});

// User.hasMany(Comments, {
//     foreignKey: 'userId',
//     onDelete: 'SET NULL'
// });

// User.hasMany(Posts, {
//     foreignKey: 'userId',
// });

module.exports = { Comments, Post, User };

