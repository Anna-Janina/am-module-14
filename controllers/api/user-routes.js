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
    try {
      const { username, password } = req.body;
  
      const user = await User.findOne({ where: { username } });
  
      if (!user) {
        res.status(400).json({ message: 'Invalid username or password' });
        return;
      }
  
      const isValidPassword = await bcrypt.compare(password, user.password);
  
      if (!isValidPassword) {
        res.status(400).json({ message: 'Invalid username or password' });
        return;
      }
  
      req.session.save(() => {
        req.session.userId = user.id,
        req.session.username = user.username,
        req.session.loggedIn = true;
  
        res.json(user);
      });
    } catch (error) {
      res.status(500).json(error);
    }
  });
  
// logout route
router.post('/logout', (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        res.status(500).json(err);
        return;
      }
      res.clearCookie('sid');
      res.json({ message: 'Successfully logged out' });
    });
  });
  

module.exports = router;