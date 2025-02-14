import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Info from '../components/footer'

export default function SharedLayout() {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Info/>
    </div>
  )
}
