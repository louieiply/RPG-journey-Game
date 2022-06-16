const Game = require('./Game');
const Comment = require('./Comment');
const User = require('./User');
const Category = require('./Category');

Game.hasMany(Comment, {
    foreignKey: 'game_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo(Game, {
    foreignKey: 'game_id'
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
})

// Category.hasOne(Game, {
//     foreignKey:
// })


