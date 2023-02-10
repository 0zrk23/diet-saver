const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Recipe extends Model {}

Recipe.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    calories: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    cuisine_type: {
      type: DataTypes.JSON,
    },
    health_labels: {
      type: DataTypes.JSON,
    },
    image: {
      type: DataTypes.STRING,
    },
    ingredients: {
      type: DataTypes.JSON,
    },
    label: {
      type: DataTypes.STRING,
    },
    meal_type: {
      type: DataTypes.JSON,
    },
    total_time: {
      type: DataTypes.INTEGER,
    },
    url: {
      type: DataTypes.STRING,
    },
    yield: {
      type: DataTypes.INTEGER,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Recipe',
  }
);

module.exports = Recipe;
