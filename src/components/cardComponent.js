import React from "react";
import { Card, Button } from "react-bootstrap";

class CardComponent extends React.Component {
  render() {
    return (
      <div>
        {this.props.bestBooksArr.map((item) => {
          return (
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={item.imageURL} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
              </Card.Body>
              <Card.Footer>{item.status}</Card.Footer>
              <Button
                  variant="primary"
                  onClick={() => this.props.deleteBook(item._id)}
                >
                  Delete
                </Button>
                <br/>
              <Button onClick={()=>this.props.showUpdate(item)}>Update</Button>
            </Card>
          );
        })}
      </div>
    );
  }
}

export default CardComponent;
