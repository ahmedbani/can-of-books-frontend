import React from "react";
import { Form, Button, Modal } from "react-bootstrap";

class bookFormModal extends React.Component {
  

  
  render() {
    console.log(this.props.showFlag);
    return (
      <div>
        
        <Modal show={this.props.showFlag} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={this.props.addBook}>
          <Form.Group className="mb-3" controlId="title">
            <Form.Label>Book title</Form.Label>
            <Form.Control type="text" placeholder="Enter title" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" placeholder="books decription" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="status">
            <Form.Label>Status</Form.Label>
            <Form.Control type="text" placeholder="status" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="imageURL">
            <Form.Label>Cover image</Form.Label>
            <Form.Control type="text" placeholder="enter the books cover" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        
      </div>
    );
  }
}

export default bookFormModal;
