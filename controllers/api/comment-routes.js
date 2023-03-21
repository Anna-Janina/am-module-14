const router = require('express').Router()
const { Comment } = require('../../models')
// TODO: include auth middleware

// TODO add this line in when auth middleware is in

// router.post('/', withAuth, async(req, res) => {
router.post('/', async(req, res) => {
    try {
        const newComment = await Comment.create({
            ...req.body,
            userId: req.session.userId,
        })
        res.json(newComment)
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router;