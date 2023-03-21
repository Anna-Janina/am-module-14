const router = require('express').Router();
const { Post } = require('../../models');


// router.post('/', withAuth, async(req, res) => {
    router.post('/', async(req, res) => {
        try {
            const newPost = await Post.create({
                ...req.body,
                userId: req.session.userId,
            })
            res.json(newPost)
        } catch (error) {
            res.status(500).json(error)
        }
    })

    // put request to update post

    // delete rrquest t delete post

    module.exports = router;