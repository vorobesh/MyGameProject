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
    await queryInterface.bulkInsert('Topics', [{
      topic_name: '+100500',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      topic_name: 'Math.random()',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      topic_name: 'IDDQD',
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
  },
};
