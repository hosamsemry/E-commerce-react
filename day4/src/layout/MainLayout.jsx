import React from 'react'
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

export default function MainLayout() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SharedLayout />} >
            <Route index element={<><HeroSection /><Home /></>} />
            <Route path='products' element={<Products />} />
            <Route path='products/:id' element={<ProductDetails />} />
            <Route path='products/:id/edit' element={<ProductForm />} />            
            <Route path='/checkout' element={<CheckOut />} />            
            <Route path='/about' element={<AboutSection />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
