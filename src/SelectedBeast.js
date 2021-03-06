import React from 'react';

import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';

class SelectedBeast extends React.Component {
  render() {
    return (
      <Modal show={this.props.displayModal} onHide={this.props.hideModal} >
        <Modal.Dialog>
          <Modal.Header closeButton />
          <Modal.Body>
            <Card style={{ width: '25rem' }}>
              <Card.Img src={this.props.selectedImgObject.image_url} />
              <Card.Body>
                <Card.Title>{this.props.selectedImgObject.title}</Card.Title>
                <Card.Text>{this.props.selectedImgObject.description}</Card.Text>
              </Card.Body>
            </Card>
          </Modal.Body>
        </Modal.Dialog>
      </Modal>
    );
  }
}

export default SelectedBeast;

