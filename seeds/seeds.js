const sequelize = require('../config/connection');
const {Category, Comment, Game, User} = require('../models');

const userData = require('./userData.json');
const gameData = require('./gameData.json');
const commentData = require('./commentData.json');
const categoryData = require('./categoryData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true});

    const categories = await Category.bulkCreate(categoryData ,{
        individualHooks: true,
        returning: true,        
    });

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    const newGame = await Game.bulkCreate(gameData, {
        individualHooks: true,
        returning: true,
    });
    
    for (let { id } of newGame) {
        for (const perComment of commentData) {              
            const newComment = await Comment.create({
                ...perComment,
                game_id: id,
            });
        }
    }
    

}

seedDatabase();
