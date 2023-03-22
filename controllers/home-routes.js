const router = require('express').Router();
const { Comments, Post, User } = require('../models');
const sequelize = require('../config/connection');

router.get('/', (req, res) => {
    Post.findAll({
        attributes: [
            'id',
            'title',
            'text',
            'userId',
        ],
        include: [{
                model: Comments,
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
    }).then(dbPostData => {
        const posts = dbPostData.map(post => post.get({
            plain: true
        }));
        res.render('homepage', {
            posts,
            loggedIn: req.session.loggedIn
        });
    })
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

router.get('/signup', (req, res) => {
    res.render('signup');
});

router.get('/post/:id', (req, res) => {
    Post.findOne({
            where: {
                id: req.params.id
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
            const post = dbPostData.get({
                plain: true
            });
            res.render('single-post', {
                post,
                loggedIn: req.session.loggedIn
            });
        })
});







module.exports = router;