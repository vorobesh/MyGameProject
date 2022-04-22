import{ useDispatch } from 'react-redux'
import GameBoard from "../GameBoard/GameBoard";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import{ Provider } from 'react-redux'
import { store } from '../../redux/store'
import Nav from '../Nav/Nav'
import Home from '../Home/Home'
import Registration from '../Registration/Registration'
import Login from '../Login/Login'
import Profile from '../Profile/Profile'
import { useEffect } from "react"
import Uninie from "../Uninie/Uninie";


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
        <Route path='/game' element={<GameBoard />} />
        <Route path='/doloyUniniye' element={<Uninie/>} />
      </Routes>
    </>
  );
}

export default App;
