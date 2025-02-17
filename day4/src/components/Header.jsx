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
      <Navbar bg="dark" className='ps-3 d-flex justify-content-between' data-bs-theme="dark">
        
          <Navbar.Brand href="/" style={{color:"lightgreen"}}>The Green Basket</Navbar.Brand>
          <Nav className=" pe-3">
            <NavLink className={({ isActive }) => isActive ? "text-success nav-link" : "nav-link text-white"} to="/">Home</NavLink>
            <NavLink className={({ isActive }) => isActive ? "text-success nav-link" : "nav-link text-white"} to="/shop">Shop</NavLink>
            <NavLink className={({ isActive }) => isActive ? "text-success nav-link" : "nav-link text-white"} to="/products">Products</NavLink>
            <NavLink className={({ isActive }) => isActive ? "text-success nav-link" : "nav-link text-white"} to="/about">About</NavLink>
            <NavLink className={"shopping-cart d-flex justify-content-between ms-1"} to="/checkout"> <TiShoppingCart /> <span className='text-decoration-none'>({count})</span></NavLink>
          </Nav>
        
      </Navbar>
    </div>
  )
}
