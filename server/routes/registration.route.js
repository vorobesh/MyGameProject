const router = require('express').Router();
const bcrypt = require('bcrypt');

const saultRounds = 10;

const {
  User,
} = require('../db/models');

router.route('/')
  .post(async (req, res) => {
    console.log('12', req.body)
    try {
      const {
        userName,
        userEmail,
        userPass,
        userPassRepeat,
      } = req.body;

      if (userName && userEmail && userPass && userPassRepeat) {
        const user = await User.findOne({
          where: {
            user_email: userEmail,
          },
        });

        if (!user) {
          if (userPass === userPassRepeat) {
            const hashPassword = await bcrypt.hash(userPass, saultRounds);

            const userCreatedOrLoggining = await User.create({
              user_name: userName,
              user_email: userEmail,
              user_password: hashPassword,
            })

            req.session.user = {
              user_name: userCreatedOrLoggining.user_name,
              user_email: userCreatedOrLoggining.user_email,
              user_id: userCreatedOrLoggining.id,
            };

            res.status(200).json({
              userCreatedOrLoggining,
              message: 'Пользователь успешно зарегистрирован',
              successRegistration: true,
            });
          } else {
            res.status(400).json({
              message: 'Введённые пароли не совпадают',
              successRegistration: false,
            });
          }
        } else {
          res.status(400).json({
            message: 'Пользователь с таким email уже зарегистрирован',
            successRegistration: false,
          });
        }
      } else {
        res.status(400).json({
          message: 'Заполните все поля!',
          successRegistration: false,
        });
      }
    } catch (error) {
      res.status(400).json({
        message: `Ошибка регистрации, \n ${error.message}`,
        successRegistration: false,
      });
    }
  });

module.exports = router;
