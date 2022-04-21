const express = require('express');
const config = require('./config/config');

const registrationRouter = require('./routes/registration.route');
const logoutRouter = require('./routes/logout.route');
const loginRouter = require('./routes/login.route');

// app && PORT
const app = express();
const PORT = process.env.PORT ?? 4000;

config(app);

app.use('/register', registrationRouter);
app.use('/logout', logoutRouter);
app.use('/login', loginRouter);

app.listen(PORT, () => { console.log(`*** Working at PORT: ${PORT} ***`); });
