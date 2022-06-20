const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Game extends Model {}

Game.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    author_id:{
      type: DataTypes.INTEGER, 
      allowNull: false,
      references: {
        model: 'user',
        key: 'id',
      }
    },

    game_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'category',
        key: 'id',
      },
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    description: {
      type: DataTypes.STRING,
    },
    
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,    
    modelName: 'game'
  }
)
module.exports = Game;
