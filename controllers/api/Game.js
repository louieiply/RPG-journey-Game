const router = require('express').Router();
const { Game, User, Category} = require('../../models');

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

module.exports = router;
