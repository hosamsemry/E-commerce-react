import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { TiShoppingCart } from "react-icons/ti";
import "../styles/main.css";
import { useSelector } from 'react-redux';


export default function Header() {

  const cart = useSelector((store) => store.cartReducer.cart);
  const count = cart.length;


  return (
    <div className='fixed-top'>
      <Navbar bg="dark" className='ps-3' data-bs-theme="dark">
        
          <Navbar.Brand href="#home" style={{color:"lightgreen"}}>The Green Basket Shop</Navbar.Brand>
          <Nav className="ms-auto pe-3">
            <NavLink className={({ isActive }) => isActive ? "text-success nav-link" : "nav-link text-white"} to="/">Home</NavLink>
            <NavLink className={({ isActive }) => isActive ? "text-success nav-link" : "nav-link text-white"} to="/products">Products</NavLink>
            <NavLink className={({ isActive }) => isActive ? "text-success nav-link" : "nav-link text-white"} to="/about">About US</NavLink>
            <NavLink className={"shopping-cart d-flex justify-content-between ms-1"} to="/checkout"> <TiShoppingCart /> <span className='text-decoration-none'>({count})</span></NavLink>
          </Nav>
        
      </Navbar>
    </div>
  )
}
