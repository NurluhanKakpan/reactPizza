import React from 'react'
import { Route,Routes } from 'react-router-dom';
import Header from './components/Header';
import Cart from './pages/Cart';
import Home from './pages/Home';
import './scss/app.scss';

 export const MyContext = React.createContext()

function App() {

const [searchValue,setSearchValue] = React.useState('')
  return (
    <MyContext.Provider value={{searchValue,setSearchValue}} >
      <div className="wrapper">
      <Header />
      <div className="content"> 
          <Routes>
            <Route path='/'element = {<Home/>} />
            <Route path='/cart'element = {<Cart/>} />
          </Routes>
      </div>
    </div>
    </MyContext.Provider>
  );
}

export default App;
