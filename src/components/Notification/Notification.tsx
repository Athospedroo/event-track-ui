import React, { useState } from 'react';
import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';


function AutohideExample({ message }: any) {
  const [show, setShow] = useState(false);

  return (
    <Row>
      <Col xs={6}>
        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
          <Toast.Header>
            <Image
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            {/* <strong className="me-auto">Bootstrap</strong>
            <small>11 mins ago</small> */}
          </Toast.Header>
          <Toast.Body>{message}</Toast.Body>
        </Toast>
      </Col>
    </Row>
  );
}

export default AutohideExample;