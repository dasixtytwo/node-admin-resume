const express = require('express'); // Fast, unopinionated, minimalist web framework for node.
const router = express.Router(); // Creates a new router object.

const passport = require('passport');
// Multer package configuration
const multer = require('multer');
// Controller
const BlogControllers = require('../../controllers/blogController');

// Path wher Storage file uploaded
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './client/build/upload/images');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`)
  }
});
// File filter for authorize just some file
const fileFilter = (req, file, cb) => {
  // Reject file
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, 'Only jpg/png files are allowed!')
  }
};
// Upload file
const upload = multer({
  storage: storage,
  limits: {
    filesize: 1024 * 1024 * 2 // 2MB Max size
  },
  fileFilter: fileFilter
});

// @route  GET api/v2/posts/test
// @desc   Test post route
// @access Public
router.get('/test', (req, res) => res.json({
  msg: 'Posts Works'
}));

// @route   GET api/v2/posts
// @desc    Get all posts
// @access  Public
router.get('/', BlogControllers.all_post);

// @route   GET api/v2/posts/:slug
// @desc    Get post by slug
// @access  Public
router.get('/post/:slug', BlogControllers.blog_by_slug);

// @route   POST api/v2/posts
// @desc    Create post
// @access  Private
router.post('/', upload.single('postImage'), passport.authenticate('jwt', {
  session: false
}), BlogControllers.create_post);

// @route   DELETE api/v2/posts/:id
// @desc    Delete post
// @access  Private
router.delete('/:slug', passport.authenticate('jwt', {
  session: false
}), BlogControllers.delete_post);

// @route   POST api/v2/posts/like/:id
// @desc    Like post
// @access  Private
router.post('/like/:id', passport.authenticate('jwt', {
  session: false
}), BlogControllers.like_by_id);

// @route   POST api/v2/posts/unlike/:id
// @desc    Unlike post
// @access  Private
router.post('/unlike/:id', passport.authenticate('jwt', {
  session: false
}), BlogControllers.unlike_by_id);

// @route   POST api/v2/posts/comment/:id
// @desc    Add comment to post
// @access  Private
router.post('/comment/:id', passport.authenticate('jwt', {
  session: false
}), BlogControllers.add_comment);

// @route   DELETE api/v2/posts/comment/:id/:comment_id
// @desc    Remove comment from post
// @access  Private
router.delete('/comment/:id/comment_id', passport.authenticate('jwt', {
  session: false
}), BlogControllers.delete_comment);


module.exports = router;