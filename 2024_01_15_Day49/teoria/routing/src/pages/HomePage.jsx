import React from 'react'
import GetLocationComponent from '../Components/GetLocationComponent'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import UserListComponent from "../Components/UserListComponent"
import AddUserComponent from '../Components/AddUserComponent'

export default function HomePage() {

  const navigate = useNavigate()
  return (
    <>
    <h1 className='text-center'>Home page</h1>
    <GetLocationComponent />
    {/* <Button variant='outline-dark' onClick={() => navigate("/detail/1")}>Detail 1</Button>
    <Button variant='outline-dark' onClick={() => navigate("/detail/2")}>Detail 2</Button>
    <Button variant='outline-dark' onClick={() => navigate("/detail/3")}>Detail 3</Button> */}
<AddUserComponent />
    <UserListComponent />


    </>
  )
}
