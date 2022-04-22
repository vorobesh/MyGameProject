import { Routes, Route } from "react-router-dom"
import{ useDispatch } from 'react-redux'
import Nav from '../Nav/Nav'
import Home from '../Home/Home'
import Registration from '../Registration/Registration'
import Login from '../Login/Login'
import Profile from '../Profile/Profile'
import { useEffect } from "react"

function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    fetch('/login')
      .then(response => response.json())
      .then(data => {
        if (data.loggedIn) {
          dispatch({type: 'LOGGEDIN_USER', payload: data.user})
        }
      })
  }, [dispatch]);

  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Profile/>} />
      </Routes>
    </>
  );
}

export default App;
