import React, { useEffect, useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { getAllProductsAction } from '../store/productSlice.js';
import { addToCartAction } from '../store/cartSlice.js';
import Swal from 'sweetalert2';

export default function Home({ scrollToCategory }) {
  const { products, isLoading, errors } = useSelector((store) => store.productSlice);
  const dispatch = useDispatch();
  const [user, setUser] = React.useState(JSON.parse(localStorage.getItem('user')));
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const groceriesRef = useRef(null);
  const electronicsRef = useRef(null);
  const clothesRef = useRef(null);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    const categoryRefs = {
      groceries: groceriesRef,
      electronics: electronicsRef,
      clothes: clothesRef,
    };
    categoryRefs[category]?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory ? product.category === selectedCategory : true)
  );

  useEffect(() => {
    const handleStorageChange = () => {
      setUser(JSON.parse(localStorage.getItem('user')));
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  useEffect(() => {
    const checkUser = () => {
      setUser(JSON.parse(localStorage.getItem('user')));
    };
    checkUser();
  }, []);

  useEffect(() => {
    dispatch(getAllProductsAction());
  }, [dispatch]);

  const categories = [...new Set(products.map(product => product.category))];

  return (
    <>
      <form className="d-flex search-box col-8 offset-2" onSubmit={(e) => e.preventDefault()}>
        <div className="input-group">
          <input type="search" className="form-control" value={searchTerm}
            onChange={handleSearch} placeholder="Search for items..." />
          <DropdownButton id="dropdown-basic-button" title={selectedCategory ? selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1) : "Categories"} className="custom-dropdown">
            <Dropdown.Item onClick={() => handleCategorySelect('groceries')}>Groceries</Dropdown.Item>
            <Dropdown.Item onClick={() => handleCategorySelect('electronics')}>Electronics</Dropdown.Item>
            <Dropdown.Item onClick={() => handleCategorySelect('clothes')}>Clothes</Dropdown.Item>
          </DropdownButton>
          <button className="btn btn-success" type="submit" >
            <FaSearch />
          </button>
        </div>
      </form>

      <div className='container my-5 bg-light p-5'>
      {filteredProducts.length === 0 && (
          <div className="text-center mt-5" style={{height: '50vh'}}>
            <h2 className="fw-bold">No matching items found</h2>
          </div>
        )}
        {categories.map(category => {
          const categoryProducts = filteredProducts.filter(product => product.category === category);
          if (categoryProducts.length === 0) return null;

          return (
            <div key={category} ref={category === 'groceries' ? groceriesRef : category === 'electronics' ? electronicsRef : clothesRef}>
              {selectedCategory === "" && searchTerm === "" && (
                <h1 className='text-center mb-5 fw-bold bg-info p-2 text-light'>{category.charAt(0).toUpperCase() + category.slice(1)}</h1>
              )}
              <div className="row">
                {categoryProducts.map((product) => (
                  <Card className='mb-4 mx-2 p-3' style={{ width: '25rem' }} key={product.id}>
                    <Card.Img variant="top" src={product.imgUrl} className='img-fluid' style={{ height: "250px" }} />
                    <Card.Body>
                      <Card.Title><div className='fs-3 mb-3 fw-bold'>{product.name.charAt(0).toUpperCase() + product.name.slice(1).toLowerCase()}</div> </Card.Title>
                      <Card.Text>
                        <span className='fw-bold fs-3 me-1 '> {product.price}</span> <span className='fw-bold fs-3' style={{ color: 'darkgreen' }}>$</span>
                      </Card.Text>
                      <Card.Text>
                        <span className='fw-bold fs-5 me-1 '>Available Quantity:</span> {product.quantity}
                      </Card.Text>
                      <Card.Text>
                        <FaStar className='text-warning fs-5 ' />
                        <FaStar className='text-warning fs-5 ' />
                        <FaStar className='text-warning fs-5 ' />
                        <FaStar className='text-warning fs-5 ' />
                        <FaStar className='text-warning fs-5 ' />
                      </Card.Text>

                      <div className='d-flex justify-content-between'>
                        {user &&
                          <Button variant="primary" className='btn btn-success fw-bold' onClick={() => {
                            dispatch(addToCartAction(product))
                            Swal.fire({
                              title: `Product Added To Cart `,
                              icon: 'success',
                              confirmButtonText: 'OK'
                            });
                          }}>Add To Cart</Button>
                        }

                        <Link to={`/products/${product.id}`}>
                          <Button variant="primary" className='btn btn-warning fw-bold'>Product Details</Button>
                        </Link>
                      </div>
                    </Card.Body>
                  </Card>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}