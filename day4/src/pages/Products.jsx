import React, { use, useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import "../styles/main.css"
import { GrView } from "react-icons/gr";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link, Links } from 'react-router-dom';
import axios from 'axios';
import { deleteProduct, getAllProducts } from '../api/productApi';

export default function Products() {
  
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
  
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const deleteHandler = async (id) => {
    await deleteProduct(id).then(()=>{
      setProducts(products.filter(product => product.id !== id))
    }).catch((error)=>{
      setErrors(error)
    }
    )
  }

  return (
    <div className='products-page'>
      <Link to='/'>
        <button className='btn btn-primary m-5'>Back To Shop</button> 
      </Link>
      {errors && <div className='alert alert-danger'>{errors.message}</div>}

      {!errors &&
        <div className='container mt-5 '>
          <div className="row">
            <h1 className='text-center fw-bold productHeading col-4 offset-4'>Products Page</h1>
          </div>

          <div className="add-and-search d-flex justify-content-between mt-5">
          <Link to="0/edit" className='btn btn-outline-primary'>
                    Add New Product
          </Link>

            <input 
              type="text" 
              placeholder='Search for products' 
              className='w-25 form-control' 
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>

          <Table striped bordered hover variant="dark" className='mt-5'>
            <thead>
              <tr>
                <th>id</th>
                <th>Product Name</th>
                <th>Product Price</th>
                <th>Product Quantity</th>
                <th>Product Category</th>
                <th>Product Image</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.price} <span style={{color:"lightgreen"}}>$</span></td>
                  <td>{product.quantity}</td>
                  <td>{product.category}</td>
                  <td>
                    <img src={product.imgUrl} alt={product.name} style={{width:"50px", height:"50px"}}/>
                  </td>
                  <td>
                    <div className='d-flex justify-content-around action-icons'>
                      <Link to={`/products/${product.id}`}>
                        <GrView className='text-info fs-5' style={{cursor:"pointer"}}/>
                      </Link>
                      <Link to={`/products/${product.id}/edit`}>
                        <FaEdit className='text-light fs-5' style={{cursor:"pointer"}}/>
                      </Link>
                      <MdDelete className='text-danger fs-3' style={{cursor:"pointer"}} onClick={()=> deleteHandler(product.id)}/>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      }
    </div>
  );
}
