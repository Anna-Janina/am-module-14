const router = require('express').Router();
const { Post } = require('../../models');


// router.post('/', withAuth, async(req, res) => {
    router.post('/', withAuth, async(req, res) => {
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
router.put('/:id', withAuth, async (req, res) => {
    try {
      const post = await Post.findByPk(req.params.id);
  
      if (!post) {
        res.status(404).json({ message: 'Post not found' });
      } else if (post.userId !== req.session.userId) {
        res.status(403).json({ message: 'Unauthorized' });
      } else {
        const updatedPost = await post.update(req.body);
        res.json(updatedPost);
      }
    } catch (error) {
      res.status(500).json(error);
    }
  });
  

// delete request to delete post
router.delete('/:id', withAuth, async (req, res) => {
    try {
      const post = await Post.findByPk(req.params.id);
  
      if (!post) {
        res.status(404).json({ message: 'Post not found' });
      } else if (post.userId !== req.session.userId) {
        res.status(403).json({ message: 'Unauthorized' });
      } else {
        await post.destroy();
        res.json({ message: 'Post deleted successfully' });
      }
    } catch (error) {
      res.status(500).json(error);
    }
  });
  

    module.exports = router;