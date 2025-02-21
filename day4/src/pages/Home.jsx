import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { getAllProductsAction } from '../store/productSlice.js';
import { addToCartAction } from '../store/cartSlice.js';
import Swal from 'sweetalert2';

export default function Home() {


  const {products,isLoading,errors} = useSelector((store)=> store.productSlice)
  const dispatch = useDispatch();
  const [user, setUser] = React.useState(JSON.parse(localStorage.getItem('user')));
  const [searchTerm, setSearchTerm] = useState("");
  
  const handleSearch = (event) => {
      setSearchTerm(event.target.value);
    };
  
  const filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
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
      
    }, []);

  useEffect(() => {
    dispatch(getAllProductsAction());
  }, [dispatch]);

  return (
    <>
    <form className="d-flex search-box col-8 offset-2">
            <div className="input-group">
                <input type="search" className="form-control " value={searchTerm}
                  onChange={handleSearch} placeholder="Search for items..."/>
                
                <button className="btn btn-success" type="submit">
                <FaSearch />
                </button>
            </div>
        </form>

    <div className='container my-5 bg-light p-5'>

    <h1 className='text-center mb-5 fw-bold bg-info p-2 text-light'>Our Products</h1>
      <div className="row">
          {filteredProducts.map((product) => (
            <Card className='mb-4 mx-2 p-3' style={{ width: '25rem' }} key={product.id}>
                <Card.Img variant="top" src={product.imgUrl} className='img-fluid' style={{height:"250px"}}/>
                <Card.Body>
                    <Card.Title><div className='fs-3 mb-3 fw-bold'>{product.name.charAt(0).toUpperCase() + product.name.slice(1).toLowerCase()}</div> </Card.Title>
                    <Card.Text>
                    <span className='fw-bold fs-5 me-1 '>Price:</span> {product.price} <span style={{color:'darkgreen'}}>$</span>
                    </Card.Text>
                    <Card.Text>
                    <span className='fw-bold fs-5 me-1 '>Category:</span> {product.category.charAt(0).toUpperCase() + product.category.slice(1).toLowerCase()}
                    </Card.Text>
                    <Card.Text>
                    <span className='fw-bold fs-5 me-1 '>Available Quantity:</span> {product.quantity}
                    </Card.Text>
                    <Card.Text>
                     
                     <FaStar className='text-warning fs-5 '/>
                     <FaStar className='text-warning fs-5 '/>
                     <FaStar className='text-warning fs-5 '/>
                     <FaStar className='text-warning fs-5 '/>
                     <FaStar className='text-warning fs-5 '/>
                    </Card.Text>

                    <div className='d-flex justify-content-between'>
                    
                    {user &&
                    <Button  variant="primary" className='btn btn-success fw-bold' onClick={()=>{
                        dispatch(addToCartAction(product))
                        Swal.fire({
                              title: `Product Added To Cart `,
                              icon: 'success',
                              confirmButtonText: 'OK'
                            });
                    }}>Add To Cart</Button>
                    }
                    
                    
                    <Link to={`/products/${product.id}`}>
                    <Button  variant="primary" className='btn btn-warning fw-bold'>Product Details</Button>
                    </Link>

                    </div>

                </Card.Body>
            </Card>
            ))}
          
            
        </div>

      <h1 className='text-center mb-5 fw-bold bg-success p-2 text-light'>Best seller</h1>
      <div className="row mb-5">
          {products.filter(product => product.price < 15).map((product) => (
            <Card className='mb-4 mx-2 p-3' style={{ width: '25rem' }} key={product.id}>
                <Card.Img variant="top" src={product.imgUrl} className='img-fluid' style={{height:"250px"}}/>
                <Card.Body>
                    <Card.Title><div className='fs-3 mb-3 fw-bold'>{product.name.charAt(0).toUpperCase() + product.name.slice(1).toLowerCase()}</div> </Card.Title>
                    <Card.Text>
                    <span className='fw-bold fs-5 me-1 '>Price:</span> {product.price} <span style={{color:'darkgreen'}}>$</span>
                    </Card.Text>
                    <Card.Text>
                    <span className='fw-bold fs-5 me-1 '>Category:</span> {product.category.charAt(0).toUpperCase() + product.category.slice(1).toLowerCase()}
                    </Card.Text>
                    <Card.Text>
                    <span className='fw-bold fs-5 me-1 '>Available Quantity:</span> {product.quantity}
                    </Card.Text>
                    <Card.Text>
                     
                     <FaStar className='text-warning fs-5 '/>
                     <FaStar className='text-warning fs-5 '/>
                     <FaStar className='text-warning fs-5 '/>
                     <FaStar className='text-warning fs-5 '/>
                     <FaStar className='text-warning fs-5 '/>
                    </Card.Text>

                    <div className='d-flex justify-content-between'>
                    
                    {user &&
                    <Button  variant="primary" className='btn btn-success fw-bold' onClick={()=>{
                        dispatch(addToCartAction(product));
                    }}>Add To Cart</Button>
                    }
                    
                    
                    <Link to={`/products/${product.id}`}>
                    <Button  variant="primary" className='btn btn-warning fw-bold'>Product Details</Button>
                    </Link>

                    </div>

                </Card.Body>
            </Card>
            ))}
          
            
        </div>

      
    </div>
    </>
  )
}
