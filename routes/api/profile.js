const express = require('express')
const router = express.Router();

// passport 
const passport = require('passport');

const ProfileController = require('../../controllers/profileController')

// @route  GET api/profile/test
// @desc   Test profile route
// @access Public
router.get('/test', (req, res) => res.json({
  msg: 'Profile Works'
}));

// @route  GET api/profile
// @desc   Get current user profile
// @access private
router.get('/', passport.authenticate('jwt', {
  session: false
}), ProfileController.find_profile);

// @route  GET api/profile/handle/:handle
// @desc   Get profile by handle
// @access Public
router.get('/handle/:handle', ProfileController.find_profile_by_handle);

// @route  GET api/profile/users/:user_id
// @desc   Get profile by user ID
// @access Public
router.get('/user/:user_id', ProfileController.find_profile_by_id);

// @route  GET api/profile/all
// @desc   Get all profile
// @access Public
router.get('/all', ProfileController.get_all_profile);

// @route  POST api/profile/
// @desc   Create a current user profile
// @access Private
router.post('/', passport.authenticate('jwt', {
  session: false
}), ProfileController.create_profile);

// @route  POST api/profile/skills
// @desc   Add skills to profile
// @access Private
router.post('/skills', passport.authenticate('jwt', {
  session: false
}), ProfileController.add_skills);

// @route  Delete api/profile/skills/:id
// @desc   Delete skills from profile
// @access Private
router.delete('/skills/:skill_id', passport.authenticate('jwt', {
  session: false
}), ProfileController.delete_skills);

// @route  POST api/profile/experience
// @desc   Add experience to profile
// @access Private
router.post('/experience', passport.authenticate('jwt', {
  session: false
}), ProfileController.add_experience);

// @route  POST api/profile/education
// @desc   Add education to profile
// @access Private
router.post('/education', passport.authenticate('jwt', {
  session: false
}), ProfileController.add_education);

// @route  Delete api/profile/experience/:id
// @desc   Delete experience from profile
// @access Private
router.delete('/experience/:exp_id', passport.authenticate('jwt', {
  session: false
}), ProfileController.delete_experience);

// @route  DELETE api/profile/education/:edu_id
// @desc   Delete education from profile
// @access Private
router.delete('/education/:edu_id', passport.authenticate('jwt', {
  session: false
}), ProfileController.delete_education);

// @route  DELETE api/profile/
// @desc   Delete education from profile
// @access Private
router.delete('/', passport.authenticate('jwt', {
  session: false
}), ProfileController.delete_profile);

module.exports = router;