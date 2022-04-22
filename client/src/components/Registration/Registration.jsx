import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import style from './Registration.module.css'


export function Registration(props) {

  const dispatch = useDispatch()
  const navigate = useNavigate();
  const { infoFromBack } =useSelector(state => state.userState);
  const { user }=useSelector(state => state.userState);
  console.log('infoFromBack', infoFromBack)
  console.log('user', user)
  

  const getUserData = (e) => {
    e.preventDefault();

    const userName = e.target.user_name.value;
    const userEmail = e.target.user_email.value;
    const userPass = e.target.user_password.value;
    const userPassRepeat = e.target.password_validation.value;

    const body = {
      userName,
      userEmail,
      userPass,
      userPassRepeat,
    }
    console.log('28', body)

    fetch('/registration', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
      .then(data => data.json())
      .then(res => {
        console.log('38', res)
        if (res.successRegistration) {
          dispatch({type: 'REGISTER_OR_LOGIN_USER', payload: res})
          navigate('/')
        }
        dispatch({type: 'REGISTER_OR_LOGIN_USER', payload: res})
      })
  }

  return (
    <div>
      <div className="row">
        <form onSubmit={getUserData} className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <input id="user_name" type="text" className="validate"></input>
              <label htmlFor="user_name">Имя пользователя</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="user_email" type="email" className="validate"></input>
              <label htmlFor="user_email">Электронная почта</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="user_password" type="password" className="validate"></input>
              <label htmlFor="user_password">Пароль</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="password_validation" type="password" className="validate"></input>
              <label htmlFor="password_validation">Повторите пароль</label>
            </div>
          </div>
          <div>
          {infoFromBack}
          </div>
          <button className={`btn waves-effect waves-light ${style.registration}`} type="submit" name="action">Зарегистрироваться
          </button>
        </form>
      </div>
    </div>
  );
}

export default Registration;
