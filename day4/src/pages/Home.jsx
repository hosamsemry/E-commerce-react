import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaSadTear, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { getAllProducts } from '../api/productApi';
import HeroSection from "../components/Hero.jsx";
import { useDispatch, useSelector } from 'react-redux';
import { getAllProductsAction } from '../store/productSlice.js';

export default function Home() {


  const {products,isLoading,errors} = useSelector((store)=> store.productSlice)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProductsAction());
  }, [dispatch]);

  return (
    <>
    
    <div className='container my-5 bg-light p-5'>
      <h1 className='text-center mb-5 fw-bold'>Our Products</h1>
      <div className="row">
          {products.map((product) => (
            <Card className='mb-4 mx-2 p-3' style={{ width: '25rem' }}>
                <Card.Img variant="top" src={product.imgUrl} className='img-fluid' style={{height:"250px"}}/>
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>
                    Price: {product.price} <span style={{color:'darkgreen'}}>$</span>
                    </Card.Text>
                    <Card.Text>
                    Category: {product.category}
                    </Card.Text>
                    <Card.Text>
                    Quantity: {product.quantity}
                    </Card.Text>
                    <Card.Text>
                     
                     <FaStar className='text-warning fs-5 '/>
                     <FaStar className='text-warning fs-5 '/>
                     <FaStar className='text-warning fs-5 '/>
                     <FaStar className='text-warning fs-5 '/>
                     <FaStar className='text-warning fs-5 '/>
                    </Card.Text>

                    <div className='d-flex justify-content-between'>
                    <Link to={`/products/${product.id}/edit`}>
                    <Button  variant="primary" className='btn btn-success fw-bold'>Add To Cart</Button>
                    </Link>
                    
                    <Link to={`/products/${product.id}/edit`}>
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
