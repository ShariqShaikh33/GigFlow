import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router'
import {Provider} from 'react-redux';
import Home from './pages/Home/index.jsx'
import Register from './pages/AuthPages/Register.jsx'
import Login from './pages/AuthPages/Login.jsx'
import { store } from './store/store.js';


function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
    
  )
}

export default App
