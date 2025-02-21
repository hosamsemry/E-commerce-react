import React, { useEffect } from 'react'
import Home from '../pages/Home'
import Products from '../pages/Products'
import ProductForm from '../pages/ProductForm'
import ProductDetails from '../pages/ProductDetails'
import NotFound from '../pages/NotFound'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SharedLayout from '../sharedLayout/SharedLayout'
import HeroSection from '../components/Hero'
import AboutSection from '../pages/about'
import CheckOut from '../pages/checkOut'
import Landing from '../pages/landing'
import Register from '../pages/Register'
import Login from '../pages/Login'
import OrderShipped from '../pages/OrderShipped'
import { useDispatch } from 'react-redux'
import { loadUser } from '../store/userSlice'
import Team from '../pages/Team'
import WhyUs from '../pages/WhyUs'

export default function MainLayout() {

  const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadUser());
    }, [dispatch]);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SharedLayout />} >
          <Route path='register' element={<Register />} />
          <Route path='login' element={<Login />} />
            <Route index element={<><HeroSection /><Landing /></>} />
            <Route path='shop' element={<Home/>}/>
            <Route path='products' element={<Products />} />
            <Route path='products/:id' element={<ProductDetails />} />
            <Route path='products/:id/edit' element={<ProductForm />} />            
            <Route path='/checkout' element={<CheckOut />} />            
            <Route path='/ordershipped' element={<OrderShipped />} />            
            <Route path='/about' element={<AboutSection />} />
            <Route path='/team' element={<Team />} />
            <Route path='/whyus' element={<WhyUs />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
