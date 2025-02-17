import React from 'react'
import { Button, Form } from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap/FloatingLabel';


export default function Login() {
  return (
    <div className="login-full-page mt-5">
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className='login mt-5 p-3 py-4'>
                    <h2 className='text-center fw-bold p-1 mb-4'>Login</h2>
                <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <FloatingLabel controlId="floatingEmailGrid" label="Email address">
                        <Form.Control type="email" placeholder="Enter email" />
                    </FloatingLabel>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <FloatingLabel controlId="floatingEmailGrid" label="Password">
                        <Form.Control type="password" placeholder="Password" />
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
