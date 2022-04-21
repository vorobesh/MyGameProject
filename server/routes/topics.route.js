const router = require('express').Router();
const { Topic } = require('../db/models');

router.get('/', async (req, res) => {
  const topics = await Topic.findAll({ raw: true });
  console.log(topics);
  res.json(topics);
});

module.exports = router;
