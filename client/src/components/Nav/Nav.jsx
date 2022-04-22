import React from 'react';
import { Link } from 'react-router-dom'
import style from './Nav.module.css'

function Nav(props) {
  return (
    <nav>
        <div className={`nav-wrapper ${style.nav}`}>
          <Link to="/" className="brand-logo">Главная</Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/registration">Регистрация</Link></li>
            <li><Link to="/login">Логин</Link></li>
            <li><Link to="/game">Играть</Link></li>
            <li><Link to="/profile">Профиль</Link></li>
            <li><Link to="/doloyUniniye">Приуныл?</Link></li>
          </ul>
        </div>
     </nav>
  );
}

export default Nav;
