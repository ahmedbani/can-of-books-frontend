import React from "react";
import { Form, Button, Modal } from "react-bootstrap";

class UpdateFormModal extends React.Component {
  render() {
    return (
      <div>
        <Modal show={this.props.showUpdate} onHide={this.props.handleCloseUpdate}>
          <Modal.Header closeButton>
            <Modal.Title>Update</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.props.updateBook}>
              <Form.Group className="mb-3" controlId="title">
                <Form.Label>Book title</Form.Label>
                <Form.Control type="text" placeholder="Enter title" defaultValue={this.props.bookToUpdate.title}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" placeholder="books decription" defaultValue={this.props.bookToUpdate.description}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="status">
                <Form.Label>Status</Form.Label>
                <Form.Control type="text" placeholder="status" defaultValue={this.props.bookToUpdate.status}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="imageURL">
                <Form.Label>Cover image</Form.Label>
                <Form.Control type="text" placeholder="enter the books cover" defaultValue={this.props.bookToUpdate.imageURL}/>
              </Form.Group>
              <Button variant="primary" type="submit">
                Update
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.handleCloseUpdate}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default UpdateFormModal;
