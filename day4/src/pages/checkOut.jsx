import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { decreaseQuantityAction, removeFromCart } from "../store/cartSlice";
import "../styles/main.css";

export default function Checkout() {
  const cart = useSelector((store) => store.cartReducer.cart);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const cancel = ()=>{
    cart.forEach(product => {
      
      dispatch(removeFromCart(product))
    });
    navigate("/");
  }
  
  const placeOrder = () => {
    cart.forEach((product) => {
      dispatch(decreaseQuantityAction({ id: product.id, quantity: product.quantity }));
    });
  
    setTimeout(() => {
      cart.forEach((product) => {
        dispatch(removeFromCart(product));
      });
      navigate("/");
    }, 500); 
  };
  

  const totalPrice = cart.reduce((sum, product) => sum + product.price * product.quantity, 0);

  return (
    <div className="container mb-3 checkout-page" style={{marginTop:'86px'}}>
      <h1 className="text-center my-4">Your Cart</h1>
      {cart.length === 0 ? (
        <h4 className="text-center">Your cart is empty</h4>
      ) : (
        <>
          {cart.map((product) => (
            <Card key={product.id} className="mb-3">
              <Card.Body className="d-flex justify-content-between align-items-center">
                <div>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>
                    <span className="fw-bold">Price:</span> {product.price} $
                  </Card.Text>
                  <Card.Text>
                    <span className="fw-bold">Quantity:</span> {product.quantity}
                  </Card.Text>
                </div>
                <img
                  src={product.imgUrl}
                  alt={product.name}
                  style={{ width: "100px", height: "100px", objectFit: "cover" }}
                />
              </Card.Body>
            </Card>
          ))}
          <div>Total Price: {totalPrice} $</div>
          <div className="d-flex justify-content-around my-5">
            <button className="btn btn-success" onClick={placeOrder}>Place Order</button>
            <button className="btn btn-danger px-4" onClick={cancel}>Cancel</button>
          </div>
        </>
      )}
      
    </div>
  );
}
