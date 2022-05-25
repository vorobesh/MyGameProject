### MyGameProject 
-игра-викторина

##### Стек технологий:

* Front: JavaScript, React, Redux, HTML5, Materialize, CSS, JSX;
* Back: Node.js, Express, Sessions, Bcrypt;
* DB: PostgreSQL, Sequelize ORM.

##### Установка:

В директории 2 папки:

"server" отвечает за back-end.
* cd server
* npm ci
* npx sequelize db:create
* npx sequelize db:migrate
* npx sequelize db:seed
* npm run dev

"client" отвечает за front-end.
* cd client
* npm ci
* npm start
