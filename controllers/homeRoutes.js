const router = require('express').Router();
const { Recipe, User } = require('../models');
// const withAuth = require('../utils/auth');

//Renders Home Page
router.get('/', async (req, res) => {
  try {
    //Render the homepage through homepage handle bar
    res.render('homepage', {
      logged_in: req.session.logged_in
    })
  } catch (err) {
    res.status(500).json(err);
  }
});


// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//load the login page
router.post('/login', async (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }
  res.render('login');
});

//load the signup page
router.get('/signup', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }
  res.render('signup');
});

module.exports = router;
