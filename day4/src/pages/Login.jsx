import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../store/userSlice';


export default function Login() {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, error, isAuthenticated } = useSelector((state) => state.auth);

    const handleChange = (e) => {
        setFormData({
            ...formData, [e.target.name]: e.target.value
        })
    }    

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginUser(formData));

        if (formData.email === '' || formData.password === '') {
            return;
        }
        if (formData.email === 'hosam@gmail.com'){
            navigate('/products')
        }else{

            navigate('/');
        }
    }

    if (isAuthenticated) {
        navigate('/');
    }

  return (
    <div className="login-full-page mt-5">
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className='login mt-5 p-3 py-4'>
                    <h2 className='text-center fw-bold p-1 mb-4'>Login</h2>
                <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <FloatingLabel controlId="floatingEmailGrid" label="Email address">
                        <Form.Control type="email" placeholder="Enter email" name='email' value={formData.email} onChange={handleChange}/>
                    </FloatingLabel>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <FloatingLabel controlId="floatingPasswordGrid" label="Password">
                        <Form.Control type="password" placeholder="Password" name='password' value={formData.password} onChange={handleChange}/>
                    </FloatingLabel>
                </Form.Group>
                
                <Button variant="primary" type="submit" className='w-100'>
                    Login
                </Button>

                <Form.Text >
                    <p className='mt-2 fs-6'>Don't have an account? <a href='/register'>Register Now</a></p>
                </Form.Text>
                </Form>
                </div>
            </div>
        </div>
    </div>
  )
}
