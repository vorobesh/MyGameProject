import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import style from './Nav.module.css'

function Nav(props) {

  const { user } =useSelector(state => state.userState);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logout = (e) => {
    e.preventDefault();

    fetch('/logout')
      .then(response => {
        dispatch({type: 'LOGOUT_USER'})
      })
  }


  return (
    <nav>
        <div className={`nav-wrapper ${style.nav}`}>
          <Link to="/" className="brand-logo">Главная</Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
          {user ?
            (<>
              <li><Link to="/game">Играть</Link></li>
              <li><Link to="/profile">Профиль</Link></li>
              <li onClick={logout}>Выйти</li>
            </>
            )
            :
            (<>
              <li><Link to="/registration">Регистрация</Link></li>
              <li><Link to="/login">Логин</Link></li>
            </>
            )}
            <li><Link to="/doloyUniniye">Приуныл?</Link></li>
          </ul>
        </div>
     </nav>
  );
}

export default Nav;
