import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import '../styles/main.css';

export default function Register() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.username) newErrors.username = 'Username is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (formData.password.length < 8 || formData.password.length > 20) {
      newErrors.password = 'Password must be 8-20 characters long';
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      // Submit form
      console.log('Form submitted', formData);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className='register-full-page mt-5'>
      <div className='container '>
        <div className="row d-flex justify-content-center">
          <div className="register mt-5 p-3 py-4" style={{ width: '40%' }}>
            <h2 className='text-center fw-bold p-1 mb-4'>Register</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicUsername">
                <FloatingLabel controlId="floatingUsernameGrid" label="Username">
                  <Form.Control
                    type="text"
                    placeholder="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    isInvalid={!!errors.username}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.username}
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <FloatingLabel controlId="floatingEmailGrid" label="Email address">
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    isInvalid={!!errors.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <FloatingLabel controlId="floatingPasswordGrid" label="Password">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    isInvalid={!!errors.password}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.password}
                  </Form.Control.Feedback>
                </FloatingLabel>
                <Form.Text id="passwordHelpBlock" className='fw-bold'>
                  Your password must be 8-20 characters long, must not contain spaces, or emoji.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                <FloatingLabel controlId="floatingConfirmPasswordGrid" label="Confirm Password">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    isInvalid={!!errors.confirmPassword}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.confirmPassword}
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Form.Group>

              <Button variant="primary" type="submit" className='mt-2'>
                Submit
              </Button>
            </Form>
          </div>
          </div>
        </div>
      </div>
    
  );
}
