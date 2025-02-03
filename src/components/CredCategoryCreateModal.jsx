import React, { Component } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { fetchCredCategory } from '../service/passVaultService';


class CredCategoryCreateModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      credCategory: '',
      description: '',
    };
  }

  handleSubmit = () => {
    const { credCategory, description } = this.state;
    console.log('Input 1:', credCategory);
    console.log('Input 2:', description);
    this.props.handleClose();
  };


  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { show, handleClose } = this.props;
    const { input1, input2 } = this.state;

    return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Credential Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formInput1">
              <Form.Label>Credential category</Form.Label>
              <Form.Control
                type="text"
                placeholder="Credential category"
                name="credCategory"
                value={input1}
                onChange={this.handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formInput2">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Description"
                name="description"
                value={input2}
                onChange={this.handleInputChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={this.handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default CredCategoryCreateModal; 
