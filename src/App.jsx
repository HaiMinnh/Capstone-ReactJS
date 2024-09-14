import React from 'react'
import Search from './ShoesShop/Search'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BodyPage from './ShoesShop/BodyPage';
import Login from './ShoesShop/Login';
import Register from './ShoesShop/Register';
import Carts from './ShoesShop/Carts';
import Index from './ShoesShop/Index';
import Profile from './ShoesShop/Profile';
import Detail from './ShoesShop/Detail';
import RealateProduct from './ShoesShop/RealateProduct';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Index />}>
          <Route index element={<BodyPage />}></Route>
          <Route path='search' element={<Search />}>
          </Route>
          <Route path='login' element={<Login />}>
          </Route>
          <Route path='register' element={<Register />}>
          </Route>
          <Route path='carts' element={<Carts />}>
          </Route>
          <Route path='profile' element={<Profile />}>
          </Route>
          <Route path="/detail/:productId" element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
