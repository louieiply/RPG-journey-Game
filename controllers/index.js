const router = require('express').Router();

const { Game } = require('../models');
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');


router.use('/', homeRoutes);
router.use('/api', apiRoutes);

router.use('/story/:gameId', async (req, res) => {
    console.log("hello" + req.params.gameId )
    //x = JSON.parse(req)

    game = (await Game.findOne({
        where: {
          id: req.params.gameId
        }
      })).toJSON()
      console.log("game" + JSON.stringify(game))
    //select * from game where game.id = req.params.gameId
    res.render('story', { 
        game
  });
})

module.exports = router;
