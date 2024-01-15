import React, { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import axios from "axios"
import ListItemComponent from "./ListItemComponent";

export default function UserListComponent() {


const [users, setUsers] = useState([]);
useEffect(() => {
    // fetch("http://localhost:3000/users")
    // .then(response => response.json())
    // .then(json => setUsers(json))
axios.get("http://localhost:3000/users")
.then(res => {
    if(res.statusText === "OK"){
        setUsers(res.data)
    } else {
        console.log("errore server")
    }
})

}, [])

  return (
    <ListGroup>
        {users.map(user => <ListItemComponent user={user} />)}
    </ListGroup>
  );
}
