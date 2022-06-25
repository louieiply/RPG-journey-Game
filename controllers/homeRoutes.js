const router = require('express').Router();
const { User, Game, Category, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const gameData = await Game.findAll({
      include: [
        {
          model:User,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const games = gameData.map((game) => game.get({ plain: true }));
    console.log(games);
    // Pass serialized data and session flag into template
    res.render('homepage', { 
      games, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/story/:id', async (req, res) => {
  try {
    const gameData = await Game.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });
    const commentsData = await Comment.findAll({
      where: {
        game_id: req.params.id
      },
      include:[
        {
          model: User,
          attributes: ['name'],
        },
      ],
    })
    const comments = commentsData.map((comment) => comment.get({ plain: true }));
    const game = gameData.get({ plain: true });
    // console.log(JSON.stringify(comments));
    res.render('story', {
      comments,
      game,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

router.get('/newstory',withAuth, async (req,res) => {
  try {
    const categoriesData = await Category.findAll();
    const categories = categoriesData.map((category) => category.get({ plain: true }));
    res.render('newstory',{
      logged_in: req.session.logged_in,
      user_id: req.session.user_id,
      categories,
    });
  } catch (err) {
    console.log(err);
    res.json(err);
  }
})

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Game, include:[{model:Category},{model:User,attributes:{exclude: ['password']}}] }],
    });
    
    const user = userData.get({ plain: true });
    console.log(JSON.stringify(user,null,2));
    res.render('profile', {
      ...user,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;
