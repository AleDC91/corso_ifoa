import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteUser } from "../actions";
import { useNavigate } from "react-router-dom";

export default function RowTableComponent({ user, index }) {

  const dispatch = useDispatch();
  const navigate = useNavigate()

  return (
    <tr>
      <td>{index + 1}</td>
      <td>{user.name}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>
        <Button variant="outline-danger" className="mx-1" onClick={() => dispatch(deleteUser(user))}>
          <i className="bi bi-trash"></i>
        </Button>
        <Button variant="outline-warning" className="mx-1" onClick={() => navigate('/users/'+user.email+'/info')}>
          <i className="bi bi-file-richtext"></i>
        </Button>
      </td>
    </tr>
  );
}


// action 
// { type: 'REMOVE_USER' , payload: user }
