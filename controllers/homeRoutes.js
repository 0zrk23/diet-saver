const router = require('express').Router();
const { Project, User } = require('../models');
// const withAuth = require('../utils/auth');

//Renders Home Page
router.get('/', async (req, res) => {
  try {
    //Render the homepage through homepage handle bar
  } catch (err) {
    res.status(500).json(err);
  }
});

/**
 * MAYBE USE THIS LATER
 */
// // Use withAuth middleware to prevent access to route
// router.get('/profile', withAuth, async (req, res) => {
//   try {
//     // Find the logged in user based on the session ID
//     const userData = await User.findByPk(req.session.user_id, {
//       attributes: { exclude: ['password'] },
//     });

//     const user = userData.get({ plain: true });

//     res.render('profile', {
//       ...user,
//       logged_in: true
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

//load the login page
router.get('/login', (req, res) => {
  try {
    //Render the login page handlebar
  } catch (err) {
    res.status(500).json
  }
});

//load the signup page
router.get('/login', (req, res) => {
  try {
    //Render the login page handlebar
  } catch (err) {
    res.status(500).json
  }
});

module.exports = router;
