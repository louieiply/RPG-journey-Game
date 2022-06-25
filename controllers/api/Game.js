const router = require('express').Router();
const { Game, User, Category} = require('../../models');
const withAuth = require('../../utils/auth');


  router.get('/', (req, res) => {
    Game.findAll({
      include: [{model:User},{model:Category}]
    })
      .then(dbCatData => {
        if(!dbCatData) {
          res.status(404).json({message: 'No Games found'});
          return;
        }
        res.json(dbCatData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err)
      });
  
  });

  router.get('/:id', (req, res) => {
    Game.findOne({
        where: {
          id: req.params.id
        },
        include: [{model:User},{model:Category}]
      })

      .then(dbCatData => {
        if(!dbCatData) {
          res.status(404).json({message: 'No Games found'});
          return;
        }
        res.json(dbCatData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err)
      });
  
  });

  router.post('/', withAuth, async (req,res) => {
    try{
        const newGame = await Game.create({
            ...req.body,
            author_id: req.session.user_id,
        });
        res.status(200).json(newGame);
    } catch(err) {
        res.status(400).json(err);
    }
});

module.exports = router;
