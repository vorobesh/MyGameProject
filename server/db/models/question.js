'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Topic }) {
      // define association here
      Question.belongsTo(Topic, { foreignKey: 'topic_id' });
    }
  }
  Question.init({
    question_name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    question_answer: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    topic_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Questions',
        key: 'id',
      },
    },
  }, {
    sequelize,
    modelName: 'Question',
  });
  return Question;
};
