import React, { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";
import { Card } from "react-bootstrap";

class Profile extends Component {
  render() {
    const { user } = this.props.auth0;
    console.log(user);
    return (
      <>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={user.picture} />
          <Card.Body>
            <Card.Title>Name : {user.name}</Card.Title>
            <Card.Text>
              email address : {user.email}
            </Card.Text>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default withAuth0(Profile);
