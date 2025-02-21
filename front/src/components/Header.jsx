import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { TiShoppingCart } from "react-icons/ti";
import "../styles/main.css";
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';

export default function Header() {

  const cart = useSelector((store) => store.cartReducer.cart);
  const count = cart.length;
  const [user, setUser] = React.useState(JSON.parse(localStorage.getItem('user')));

  useEffect(() => {
    const handleStorageChange = () => {
      setUser(JSON.parse(localStorage.getItem('user')));
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }
  , []);

  useEffect(() => {
    const checkUser= ()=>{
      setUser(JSON.parse(localStorage.getItem('user')));  
    };
    checkUser();
    const interval = setInterval(checkUser, 500); 

    return () => clearInterval(interval);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    setUser(null);
    Swal.fire({
      title: `Logged out Successfully `,
      icon: 'success',
      confirmButtonText: 'OK'
    });
    
  };

  return (
    <div className='fixed-top'>
      <Navbar bg="dark" className='ps-3 d-flex justify-content-between' data-bs-theme="dark">
        
          <Navbar.Brand href="/" style={{color:"lightgreen"}}>The Green Basket</Navbar.Brand>
          <Nav className=" pe-3">
            <NavLink className={({ isActive }) => isActive ? "text-success nav-link" : "nav-link text-white"} to="/">Home</NavLink>
            <NavLink className={({ isActive }) => isActive ? "text-success nav-link" : "nav-link text-white"} to="/shop">Shop</NavLink>
            {user && user.role === 'admin' &&
            <NavLink className={({ isActive }) => isActive ? "text-success nav-link" : "nav-link text-white"} to="/products">Dashboard</NavLink>
            }
            
            {user &&
            <NavLink className={"shopping-cart d-flex justify-content-between ms-1"} to="/checkout"> <TiShoppingCart /> <span className='text-decoration-none'>({count})</span></NavLink>
            }
            
            {user && 
          <NavLink className='ms-2 mt-2 text-light text-decoration-none' to="/login" onClick={handleLogout}>logout</NavLink>
          }
          {!user &&
          <NavLink className='ms-2 mt-2 text-light text-decoration-none' to="/login">login</NavLink>
          }
          </Nav>
          

      </Navbar>
    </div>
  )
}
