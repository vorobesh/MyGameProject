import React, { useState } from 'react';
import style from './Profile.module.css'

function Profile(props) {

  const [edit, setEdit] = useState(false); 

  function editProfile() {
    setEdit(true);
  }


  return (
    <>
    {/* <div className={style.profile}> */}
    <div className={style.profile} align='center'>
        <div className="col s12 m6" >
          <div className="card green darken-1" >
            <div className='card-content white-text'>
              <span className="card-title"> Профиль </span>
              {!edit ?
                (<ul>
                  <li><p>Имя пользователя: {}</p></li>
                  <li><p>Email: {}</p></li>
                  <li><p>Дата регистрации: {}</p></li>
              </ul>) 
                    :
                (<ul>
                  <li>
                    <p>Имя пользователя: {}</p>
                    <input defaultValue={`helloWorld`}   />
                  </li>

                  <li>
                    <p>Email: {}</p>
                    <input defaultValue={`helloWorld`}   />
                  </li>

                  <li>
                    <p>Дата регистрации: {}</p>
                    <input defaultValue={`helloWorld`}   />
                  </li>
                </ul>)    
              } 
                
              
            </div>
            <div className="card-action">
            <button onClick={editProfile} className={`btn waves-effect waves-light`} name="action"> Редактировать </button>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}

      <h5 align='center'> Результаты игр: </h5> 
      <br></br>

      <table className={style.results} align='center'>
        <thead>
          <tr>
              <th>#</th>
              <th>Дата игры</th>
              <th>Результат</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>22.04.2022</td>
            <td>100</td>
          </tr>
          <tr>
            <td>2</td>
            <td>22.04.2022</td>
            <td>300</td>
          </tr>
          <tr>
            <td>3</td>
            <td>23.04.2022</td>
            <td>-500</td>
          </tr>
        </tbody>
      </table>

      </>
  );
}

export default Profile;


// { (date instanceof Date) ? 
//   date.toLocaleDateString('en-GB') : 
//   new Date(date).toLocaleDateString('en-GB') }
