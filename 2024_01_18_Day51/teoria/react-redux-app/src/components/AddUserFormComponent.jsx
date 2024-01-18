import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addUser } from '../actions';

export default function AddUserFormComponent() {

    const [formState, setFormState] = useState({name: '', username: '',email: '', password: '', phone: '', website: ''});
    const dispatch = useDispatch();

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasic">
        <Form.Label>Fullname</Form.Label>
        <Form.Control 
            value={formState.name} 
            name="fullname" 
            type="text" 
            placeholder="Enter fullname..."
            onChange={(e) => setFormState({...formState, name: e.target.value}) }
             />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasic">
        <Form.Label>Username</Form.Label>
        <Form.Control 
            value={formState.username} 
            name="username" 
            type="text" 
            placeholder="Enter username..."
            onChange={(e) => setFormState({...formState, username: e.target.value}) } />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasic">
        <Form.Label>Email address</Form.Label>
        <Form.Control 
            value={formState.email} 
            name="email" 
            type="email" 
            placeholder="Enter email..."
            onChange={(e) => setFormState({...formState, email: e.target.value}) } />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasic">
        <Form.Label>Password</Form.Label>
        <Form.Control 
            value={formState.password}
            name="password"  
            type="password" 
            placeholder="Enter Password..."
            onChange={(e) => setFormState({...formState, password: e.target.value}) } />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasic">
        <Form.Label>Phone</Form.Label>
        <Form.Control 
            value={formState.phone} 
            name="phone" 
            type="tel" 
            placeholder="Enter phone..."
            onChange={(e) => setFormState({...formState, phone: e.target.value}) } />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasic">
        <Form.Label>Website</Form.Label>
        <Form.Control 
            value={formState.website} 
            name="website" 
            type="url" 
            placeholder="Enter website..."
            onChange={(e) => setFormState({...formState, website: e.target.value}) } />
      </Form.Group>
      
      <Button variant="primary" type="button" onClick={() => dispatch(addUser(formState))}>
        Add User
      </Button>
    </Form>
  )
}
