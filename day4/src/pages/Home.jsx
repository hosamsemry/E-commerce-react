import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProductsAction } from '../store/productSlice.js';
import { addToCartAction } from '../store/cartSlice.js';

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
                    
                    <Button  variant="primary" className='btn btn-success fw-bold' onClick={()=>{
                        dispatch(addToCartAction(product));
                    }}>Add To Cart</Button>
                    
                    
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
