const router = require('express').Router();
const { Post, Comments, User} = require('../../models');
const sequelize = require('../../config/connection');

// get all users
router.get('/', (req, res) => {
    Post.findAll({
        attributes: ['id', 'title', 'text', 'userId'],
        include: [
            {

            }
        ]
    })
})