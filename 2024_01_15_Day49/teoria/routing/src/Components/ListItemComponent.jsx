import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function ListItemComponent({ user }) {

const navigate = useNavigate()
    return (
    <ListGroup.Item key={user.id}>
      {user.name} --- {user.email}
      <div className="float-end">
        <Button
          variant="outline-warning"
          onClick={() => navigate("/detail/" + user.id)}
        >
          <i className="bi bi-file-richtext"></i>
        </Button>
        <Button
          variant="outline-danger"
        >
          <i className="bi bi-trash"></i>
        </Button>
      </div>
    </ListGroup.Item>
  );
}
