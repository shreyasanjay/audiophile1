import { CardGroup, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import Tooltip from 'react-bootstrap/Tooltip';
import Spinner from 'react-bootstrap/Spinner';
import CloseButton from 'react-bootstrap/CloseButton';
function Artist() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          Info
        </Tooltip>
      );
  return (
    <div>
    <Alert variant="info" className='info-al'>
        <Alert.Heading>Listen to your favourite artists
        </Alert.Heading>
    </Alert>
      <div className='row mt-2'>
        <CardGroup className='grp'>
        <Card className='artist'>
          <Card.Img variant="top" src="kishore.jpg" className='im'/>
          <Card.Body>
            <Card.Title>Kishore Kumar</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>&nbsp;&nbsp;
        <Card className='artist'>
          <Card.Img variant="top" src="arijit.jpg" className='im'/>
          <Card.Body>
            <Card.Title>Arijit Singh</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>&nbsp;&nbsp;
        <Card className='artist'>
        <Card.Img variant="top" src="lata.jpg" className='im'/>
          <Card.Body>
            <Card.Title>Lata Mangeshkar</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>&nbsp;&nbsp;
        <Card className='artist'>
        <Card.Img variant="top" src="shreya.jpg" className='im'/>
          <Card.Body>
            <Card.Title>Shreya Ghoshal</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>&nbsp;&nbsp;
        <Card className='artist'>
        <Card.Img variant="top" src="lata.jpg" className='im'/>
          <Card.Body>
            <Card.Title>Lata Mangeshkar</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>&nbsp;&nbsp;
        <Card className='artist'>
        <Card.Img variant="top" src="shreya.jpg" className='im'/>
          <Card.Body>
            <Card.Title>Shreya Ghoshal</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>&nbsp;&nbsp;
        </CardGroup>
      </div><br />

        <Modal show={show} onHide={handleClose}>
            <Modal.Header>
              <Modal.Title>Pricing</Modal.Title>
              <CloseButton onClick={handleClose} />
            </Modal.Header>
            <Modal.Body>Woohoo, you're one step
                closer to listen to your favourite songs!
                Pay Rs. 40/ month to enjoy uninturrupted streaming!</Modal.Body>
                <p>Loading Best prices for you!!</p>
                <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Pay
              </Button>
            </Modal.Footer>
          </Modal>
    </div>
  );
}

export default Artist;