const express = require('express')
const router = express.Router();
// passport
const passport = require('passport');

const AuthController = require('../../controllers/authController')

// @route  GET api/users/test
// @desc   Test users route
// @access Public
router.get('/test', (req, res) => res.json({
  msg: 'Users Works'
}));

// @route  POST api/users/register
// @desc   Register users route
// @access Public
router.post('/register', AuthController.registerUser);

// @route  POST api/users/login
// @desc   Login User / Return JWT Token
// @access Public
router.post('/login', AuthController.loginUser);

// @route  GET api/users/current
// @desc   Return current user
// @access Private
router.get('/current', passport.authenticate('jwt', {
  session: false
}), AuthController.currentUser);

module.exports = router;