const router = require('express').Router();
const { Post } = require('../../models');
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