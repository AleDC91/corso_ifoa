import React, { Component } from "react";
import { Alert, Container, ListGroup, Spinner } from "react-bootstrap";

export default class UsersComponent extends Component {
  state = {
    users: [],
    isLoading: true,
    errorMsg: "",
  };

  componentDidMount() {
    this.setState({
      isLoading: true,
      errorMsg: "",
    });

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          this.setState({ errorMsg: response.statusText, isLoading: false });
          return;
        } else {
          return response.json();
        }
      })
      .then((json) => this.setState({ users: json, isLoading: false }))
      .catch((err) =>
        this.setState({ errorMsg: err.message, isLoading: false })
      );
  }

  render() {
    return (
      <Container>
        <h1>users list</h1>

        {this.state.isLoading && <Spinner />}
        {this.state.users.length !== 0 && (
          <ListGroup defaultActiveKey="#">
            {this.state.users.map((user) => (
              <ListGroup.Item action href="#">
                {user.email}
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
        {this.state.errorMsg && (
          <Alert variant="warning">errore! {this.state.errorMsg}</Alert>
        )}
      </Container>
    );
  }
}
