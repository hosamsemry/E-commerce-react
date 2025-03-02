import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import "../styles/main.css"
import { GrView } from "react-icons/gr";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProductAction, getAllProductsAction } from '../store/productSlice';


export default function Products() {
  const navigate = useNavigate();
  const {products,isLoading,errors} = useSelector((store)=> store.productSlice)
  const dispatch = useDispatch();
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
    
  }, []);
  useEffect(() => {
    dispatch(getAllProductsAction());
    
  }, [dispatch]);
    
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const deleteHandler = async (id) => {
    dispatch(deleteProductAction(id));
  }

  if (user && user.role === 'admin') {
  return (
      <div className='products-page' style={{marginTop:'56px'}}>
        
        {errors && <div className='alert alert-danger'>{errors.message}</div>}
  
        {!errors &&
          <div className='container mt-5 '>
            <div className="row">
            <Link to='/shop'>
              <button className='btn btn-primary mt-5'>Back To Shop</button> 
            </Link>
              <h1 className='text-center fw-bold productHeading col-4 offset-4'>Admin Dashboard</h1>
            </div>
  
            <div className="add-and-search d-flex justify-content-between mt-5">
            <Link to="0/edit" className='btn btn-outline-primary fw-bold'>
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
                  <th style={{maxWidth:"200px"}}>Product Description</th>
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
                    <td style={{maxWidth:"200px"}}>{product.description}</td>
                    <td>{product.price} <span style={{color:"lightgreen"}}>$</span></td>
                    <td>{product.quantity}</td>
                    <td>{product.category}</td>
                    <td>
                      <img src={product.imgUrl} alt={product.name} style={{width:"50px", height:"50px"}}/>
                    </td>
                    <td>
                      <div className='d-flex justify-content-around align-items-center action-icons p-2'>
                        <Link to={`/products/${product.id}`}>
                          <GrView className='text-info fs-4' style={{cursor:"pointer"}}/>
                        </Link>
                        <Link to={`/products/${product.id}/edit`}>
                          <FaEdit className='text-light fs-4' style={{cursor:"pointer"}}/>
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

}
