const router = require('express').Router();
const { User } = require('../../models')

// create a new user
router.post('/', async (req, res) => {
    try {
        const user = await User.create({
            username: req.body.username,
            password: req.body.password,
        })

        req.session.save(() => {
            req.session.userId = user.id,
            req.session.username = user.username,
            req.session.loggedIn = true;

            res.json(user)
        })
    } catch (error) {
        res.status(500).json(error)
    }
})

// user can login
router.post('/login', async (req, res) => {
// login code
})
// logout write node function ////////////////
router.post('/logout', (req, res) => {
    // logout code
})
module.exports = router;