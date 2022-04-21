import GameBoard from "../GameBoard/GameBoard";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Provider } from 'react-redux'
import { store } from '../../redux/store'

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/game" element={<GameBoard />}></Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
