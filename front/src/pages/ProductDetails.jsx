import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaStar } from "react-icons/fa";
import { Link, Links, useParams } from 'react-router-dom';
import { getProductById } from '../api/productApi';
import "../styles/main.css"
import { useSelector } from 'react-redux';

export default function ProductDetails() {

    const {id} = useParams()
    const [product, setProduct] = useState({})
    const [error , setError] = useState(null)
    const {products}= useSelector((store) => store.productSlice)
    useEffect(()=>{
        setProduct(products.find(product => product.id == id))
    }, [id])

    const user = JSON.parse(localStorage.getItem('user'));

  
  return (
    
    <div className='mb-5' style={{marginTop:'56px'}}>
        

        <div className='container  p-5'>
            {user && user.role === 'admin' &&
                <Link to='/products'>
                    <button className='btn btn-primary m-4'>Back To Dashboard</button> 
                </Link>
            }
            {!user || user.role === 'customer' &&
                <Link to='/shop'>
                    <button className='btn btn-primary m-4'>Back To Shop</button> 
                </Link>
            }
            <h1 className='text-center fw-bold productHeading col-4 offset-4'>Product Details</h1>
        </div>


        <div className="container mt-5">

        <div className="row d-flex justify-content-center">
            <Card className='pt-3' style={{ width: '25rem' }}>
                <Card.Img variant="top" src={product?.imgUrl}/>
                <Card.Body className='fs-4'>
                    <Card.Title><span className='fw-bold fs-4'>Name :</span> {product.name}</Card.Title>
                    <Card.Text>
                    <span className='fw-bold fs-5'> Description :</span> {product.description}
                    </Card.Text>
                    <Card.Text>
                    <span className='fw-bold fs-5'> Price :</span> {product.price}  <span style={{color:'darkgreen'}}>$</span>
                    </Card.Text>
                    <Card.Text>
                    <span className='fw-bold fs-5'> Category :</span> {product.category}
                    </Card.Text>
                    <Card.Text>
                    <span className='fw-bold fs-5'> Quantity :</span> {product.quantity}
                    </Card.Text>
                    <Card.Text>
                     <FaStar className='text-warning fs-5 '/>
                     <FaStar className='text-warning fs-5 '/>
                     <FaStar className='text-warning fs-5 '/>
                     <FaStar className='text-warning fs-5 '/>
                     <FaStar className='text-warning fs-5 '/>
                    </Card.Text>
                    {user && user.role === 'admin' && 
                    <Link to={`/products/${product.id}/edit`}>
                    <Button  variant="primary" className='btn btn-warning fw-bold'>Edit Product</Button>
                    </Link>
                    }
                </Card.Body>
            </Card>
        </div>
        </div>
    </div>
  )

}
