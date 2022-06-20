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
    foreignKey: 'user_id',
});

User.hasMany(Game, {
    foreignKey: 'author_id',
    onDelete: 'CASCADE'
});

Game.belongsTo(User, {
    foreignKey: 'author_id'
});

Category.hasMany(Game, {
    foreignKey: 'category_id',
    onDelete: 'SET NULL'
});

Game.belongsTo(Category, {
    foreignKey: 'category_id'
});


module.exports = { Game,Category,Comment,User}
