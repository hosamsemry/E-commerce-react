import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaSadTear, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { getAllProducts } from '../api/productApi';
import HeroSection from "../components/Hero.jsx";

export default function Home() {


  let [products, setProducts] = useState([])
  let [errors, setErrors] = useState(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let response = await getAllProducts();
        setProducts(response.data);
      } catch (error) {
        setErrors(error);
      }
    };
  
    fetchProducts(); 
  }, []);

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
                    category: {product.category}
                    </Card.Text>
                    <Card.Text>
                    quantity: {product.quantity}
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
                    <Button  variant="primary" className='btn btn-success fw-bold'>Add Product</Button>
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
