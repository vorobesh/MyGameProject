const router = require('express').Router();
const { Question } = require('../db/models');

router.get('/', async (req, res) => {
  const questions = await Question.findAll({ raw: true });
  console.log(questions);
  res.json(questions);
});

module.exports = router;
