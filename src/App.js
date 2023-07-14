import React from 'react';

import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/hompage/homepage.component';

import './App.css';
import ShopPage from './pages/shop/shop.component';
import Header from './component/header/header.component';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <Routes>
        <Route  path='/' element={<HomePage />}/>
        <Route  path='/shop' element={<ShopPage />}/>
        </Routes>
      </div>
    );
  }
}

export default App;




