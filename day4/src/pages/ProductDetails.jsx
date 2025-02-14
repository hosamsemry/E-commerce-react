import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaStar } from "react-icons/fa";
import { Link, Links, useParams } from 'react-router-dom';
import { getProductById } from '../api/productApi';
import "../styles/main.css"

export default function ProductDetails() {

    const {id} = useParams()
    const [product, setProduct] = useState({})
    const [error , setError] = useState(null)

    useEffect(()=>{
        getProductById(id).then((response) => setProduct(response.data)).catch((error) => setError(error));
    }, [id])

  return (
    
    <div className='mb-5'>
        <Link to='/products'>
            <button className='btn btn-primary m-4'>Back To Dashboard</button> 
        </Link>

        <div className='container  p-5'>
            <h1 className='text-center fw-bold productHeading col-4 offset-4'>Product Details</h1>
        </div>


        <div className="container mt-5">

        <div className="row d-flex justify-content-center">
            <Card className='pt-3' style={{ width: '25rem' }}>
                <Card.Img variant="top" src={product?.imgUrl}/>
                <Card.Body>
                    <Card.Title><span className='fw-bold fs-5'>Name :</span> {product.name}</Card.Title>
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
                    
                    <Link to={`/products/${product.id}/edit`}>
                    <Button  variant="primary" className='btn btn-warning fw-bold'>Edit Product</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
        </div>
    </div>
  )
}
