'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Questions', [{
      question_name: 'Назовите имя человека, скрывающего боль',
      question_answer: 'гарольд',
      question_price: 100,
      topic_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      question_name: 'Кого вызывал Гоген Солнцев в эфире программы "Пусть Говорят!"?',
      question_answer: 'адвокат',
      question_price: 200,
      topic_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      question_name: 'Какую болезнь лечил доктор Попов, с помощью огурцов? Подсказка: если не срывать их с грядки, они дадут силу земли!',
      question_answer: 'геморрой',
      question_price: 300,
      topic_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      question_name: '"git commit -m, git push", что мы забыли?',
      question_answer: 'git add -A',
      question_price: 100,
      topic_id: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      question_name: 'Какой результат выражения: 2 + 2?',
      question_answer: '4',
      question_price: 200,
      topic_id: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      question_name: 'Какой результат выражения: "2" + "2" - "2"?',
      question_answer: '20',
      question_price: 300,
      topic_id: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      question_name: 'Назовите чит код на здоровье из GTA: Vice City',
      question_answer: 'aspirine',
      question_price: 100,
      topic_id: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      question_name: 'Лучшая тактика на de_dust2',
      question_answer: 'rush b',
      question_price: 200,
      topic_id: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      question_name: 'Из какой игры мем: "При пожаре: Воруй, убивай, люби гусей"?',
      question_answer: 'alpha protocol',
      question_price: 300,
      topic_id: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
