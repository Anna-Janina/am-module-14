const router = require('express').Router();
const { Comments, Post, User } = require('../models');
const sequelize = require('../config/connection');
const withAuth = require('../utils/auth');


// get single post form

// rotuer.get to get the new post handlebar withlayoiut of dashboard


//Get all posts for dashboard
router.get('/', withAuth, (req, res) => {
    Post.findAll({
            where: {
                userId: req.session.userId
            },
            attributes: [
                'id',
                'title',
                'text',
                'userId'
            ],
            include: [{
                    model: Comment,
                    attributes: ['commentId', 'commentText', 'userId'],
                    include: {
                        model: User,
                        attributes: ['username']
                    }
                },
                {
                    model: User,
                    attributes: ['username']
                }
            ]
        })
        .then(dbPostData => {
            const posts = dbPostData.map((post) => post.get({
                plain: true
            }));
            console.log(dbPostData);
            res.render('dashboard', {
                posts: posts,
                loggedIn: true
            });
        })
});

router.get('/edit/:id', (req, res) => {
    Post.findOne({
            where: {
                id: req.params.id
            },
            attributes: [
                'id',
                'title',
                'text',
                'userId',
            ],
            include: [{
                    model: User,
                    attributes: ['username']
                },
                {
                    model: Comment,
                    attributes: ['commentId', 'commentText', 'userId'],
                    include: {
                        model: User,
                        attributes: ['username']
                    }
                }
            ]
        })
        .then(dbPostData => {
            const post = dbPostData.get({
                plain: true
            });
            res.render('edit-post', {
                post,
                loggedIn: true
            });
        })
});

module.exports = router;