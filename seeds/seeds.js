const sequelize = require('../config/connection');
const {Category, Comment, Game, User} = require('../models');

const userData = require('./userData.json');
const gameData = require('./gameData.json');
const commentData = require('./commentData.json');
const categoryData = require('./categoryData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true});

    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    // const categories = await Category.bulkCreate(categoryData ,{
    //     individualHooks: true,
    //     returning: true,        
    // });

    // for(const {id} of users){
    //     const newGame = await Game.create(gameData, {
    //         author_id: id,
    //     });
    //     for (const {id} of newGame) {
    //         const newComment = await Comment.create(commentData, {
    //             game_id: id,

    //         });

    //     }
    // }
process.exit(0);
}

seedDatabase();
