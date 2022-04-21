import { BrowserRouter, Routes, Route } from "react-router-dom"
import{ Provider } from 'react-redux'
import { store } from '../../redux/store'
import Nav from '../Nav/Nav'
import Home from '../Home/Home'
import Registration from '../Registration/Registration'
import Login from '../Login/Login'
import Profile from '../Profile/Profile'

function App() {



  return (
    <BrowserRouter>
      <Provider store={store}>
      <Nav />

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Profile/>} />

      </Routes>
      
      </Provider>
    </BrowserRouter>
  );
}

export default App;
