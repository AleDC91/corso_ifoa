import React, { useEffect, useState } from "react";
import GetLocationComponent from "../Components/GetLocationComponent";
import NavigateComponent from "../Components/NavigateComponent";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Button, Card, ListGroup } from "react-bootstrap";

export default function DetailPage() {
  // const params = useParams()
  const { id } = useParams();
  const [userDetail, setUserDetail] = useState({});

  // console.log(id);

  useEffect(() => {
    axios.get("http://localhost:3000/users/" + id ).then((res) => {
      if (res.statusText === "OK") {
        setUserDetail(res.data);
      } else {
        console.log("errore server");
      }
    });
  }, []);

  return (
    <>
      <h1 className="text-center">Detail Page</h1>
      <GetLocationComponent />
      <NavigateComponent />

      <Card className="text-center">
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Card.Title>{userDetail.name}</Card.Title>
          <Card.Text>
            <ListGroup>
              <ListGroup.Item>Username: {userDetail.username}</ListGroup.Item>
              <ListGroup.Item>Email: {userDetail.email}</ListGroup.Item>
              <ListGroup.Item>Phone: {userDetail.phone}</ListGroup.Item>
              <ListGroup.Item>Website: {userDetail.website}</ListGroup.Item>
            </ListGroup>
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
    </>
  );
}
