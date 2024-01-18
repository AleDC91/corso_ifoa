import React from 'react'
import TableComponent from '../components/TableComponent'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function UsersPage() {

  const navigate = useNavigate();

  return (
    <>
      <h1 className="my-5 text-center">UsersPage</h1>
      <Button 
        variant="dark" 
        className='my-2'
        onClick={() => navigate('/users/new')}
      ><i className="bi bi-person-fill-add"></i></Button>
      <TableComponent />
    </>
  )
}
