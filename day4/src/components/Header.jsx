import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';




export default function Header() {
  return (
    <div>
      <Navbar bg="dark" className='ps-3' data-bs-theme="dark">
        
          <Navbar.Brand href="#home" style={{color:"lightgreen"}}>The Green Basket Shop</Navbar.Brand>
          <Nav className="ms-auto pe-3">
            <NavLink className={({ isActive }) => isActive ? "text-success nav-link" : "nav-link text-white"} to="/">Home</NavLink>
            <NavLink className={({ isActive }) => isActive ? "text-success nav-link" : "nav-link text-white"} to="/products">Products</NavLink>
            <NavLink className={({ isActive }) => isActive ? "text-success nav-link" : "nav-link text-white"} to="/about">About US</NavLink>
          </Nav>
        
      </Navbar>
    </div>
  )
}
