import React from 'react'
import { useLocation } from 'react-router-dom'

export default function GetLocationComponent() {

    const location = useLocation()

  return (
   <h3>Page: {location.pathname}</h3>
  )
}
