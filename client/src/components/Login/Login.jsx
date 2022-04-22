import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import style from './Login.module.css'

function Login(props) {
  const [isCorrect, setIsCorrect] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const tryLogin = useCallback(()=>{
    setIsCorrect(true);
  })

  const getUserData = (e) => {
    e.preventDefault();

    const userEmail = e.target.user_email.value;
    const userPass = e.target.user_password.value;

    const body = {
      userEmail,
      userPass,
    }

    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
      .then(data => data.json())
      .then(res => {
        if (res.successEntry) {
          dispatch({type: 'REGISTER_OR_LOGIN_USER', payload: res})
          navigate('/')
        }
      })
  }

  return (
    <div className={style.div}>
      <div className={`row ${style.color_form}`}>
        <form onSubmit={getUserData} className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <input id="user_email" type="email" className="validate"></input>
              <label for="user_email">Электронная почта</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="user_password" type="password" className="validate"></input>
              <label for="user_password">Пароль</label>
            </div>
          </div>
          <div>
           {isCorrect
           ?
           (<>
            <p>Некорректный логин или пароль</p>
           </>)
           :
           (<>
           </>)
           }
          </div>
          <button className={`btn waves-effect waves-light ${style.login}`} onClick={tryLogin} type="submit" name="action">Войти
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
