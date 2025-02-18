import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../styles/main.css"
import { addNewProduct, getProductById, updateProduct } from '../api/productApi';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addProductAction, updateProductAction } from '../store/productSlice';


export default function ProductForm() {

 const dispatch = useDispatch();
 const {id} = useParams()
 const [error , setError] = useState(null)
 const [formData, setFormData]= useState({
    name: '',
    price: '',
    quantity: '',
    category: '',
    imgUrl: ''
 })

 useEffect(()=>{
  if(id!=0){

    getProductById(id).then((response) => setFormData(response.data)).catch((error) => setError(error));
  }
}, [id])

  const navigate = useNavigate();

  const inputHandler = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  const productHandler = async (event) => {
    event.preventDefault();
    if (id == 0) {
      await dispatch(addProductAction(formData));
      navigate("/products");
    } else {
      await dispatch(updateProductAction({ id, product: formData }));
      navigate("/products");
    }
  };
  
  const user = JSON.parse(localStorage.getItem('user'));

  if (user && user.role === 'admin'){
    return (
      <div className='container mb-5' style={{marginTop:'86px'}}>
        <Link to='/products'>
              <button className='btn btn-primary'>Back To Dashboard</button> 
          </Link>
        <h1 className='fw-bold text-center my-5'>{id==0 ? "Add New Product":"Edit Product"}</h1>
        <Form onSubmit={productHandler} className='mt-5  product-form'>    
        <Form.Group className="mb-3" controlId="productName">
          <Form.Label>Product Name</Form.Label>
          <Form.Control name='name' value={formData.name} onChange={inputHandler} type="text" placeholder="Enter Product Name" />
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="productPrice">
          <Form.Label>Product Price</Form.Label>
          <Form.Control name='price' value={formData.price} onChange={inputHandler} type="text" placeholder="Enter Product Price" />
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="productQuantity">
          <Form.Label>Product Quantity</Form.Label>
          <Form.Control name='quantity' value={formData.quantity} onChange={inputHandler} type="text" placeholder="Enter Product Quantity" />
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="productCategory">
          <Form.Label>Product Category</Form.Label>
          <Form.Control name='category' value={formData.category} onChange={inputHandler} type="text" placeholder="Enter Product Category" />
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="productImg">
          <Form.Label>Product Image</Form.Label>
          <Form.Control name='imgUrl' value={formData.imgUrl} onChange={inputHandler} type="text" placeholder="Enter Product Image URL" />
        </Form.Group>
        
        <Button variant="primary" className='btn btn-success' type="submit">
        {id==0 ? "Add New Product":"Edit Product"}
        </Button>
      </Form>
      </div>
    )

  }else{
    navigate('/')
  }
}
