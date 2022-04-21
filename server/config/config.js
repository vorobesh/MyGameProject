require('dotenv').config();
const express = require('express');
const path = require('path');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const FileStore = require('session-file-store')(session);
const cors = require('cors');
const isSession = require('../middlewares/isSession');

function config(app) {
  const sessionConfig = {
    store: new FileStore(),
    name: 'user_sid',
    secret: process.env.SESSION_SECRET ?? 'hello24world5',
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60,
      httpOnly: true,
    },
  };
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static(path.join(process.env.PWD, 'public')));

  app.use(cookieParser());
  app.use(session(sessionConfig));
  app.use(cors());

  app.use(isSession);
}

module.exports = config;
