/* eslint-disable camelcase */
const router = require('express').Router();
const bcrypt = require('bcrypt');

const { User } = require('../db/models');

router.route('/')
  .post(async (req, res) => {
    try {
      const {
        userEmail,
        userPass,
      } = req.body;

      const userCreatedOrLoggining = await User.findOne({
        where: {
          user_email: userEmail,
        },
      });

      if (userCreatedOrLoggining) {
        const isPassValide = await bcrypt.compare(userPass, userCreatedOrLoggining.user_password);

        if (isPassValide) {
          req.session.user = {
            user_name: userCreatedOrLoggining.user_name,
            user_email: userCreatedOrLoggining.user_email,
            user_id: userCreatedOrLoggining.id,
          };

          res.status(200).json({
            userCreatedOrLoggining,
            message: 'Вы вошли в свой аккаунт',
            successEntry: true,
          });
        } else {
          res.status(401).json({
            message: 'Некорректные данные',
            successEntry: false,
          });
        }
      } else {
        res.status(404).json({
          message: 'Пользователь не найден',
          successEntry: false,
        });
      }
    } catch (error) {
      res.status(400).json({
        message: `Ошибка входа, \n ${error.message}`,
        successEntry: false,
      });
    }
  });
module.exports = router;
