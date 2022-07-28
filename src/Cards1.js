import { CardGroup, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
import CloseButton from "react-bootstrap/CloseButton";
import './Cards1.css';
function Cards1() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Alert variant="info" className="info-al">
        <Alert.Heading>Listen to your favourite artists</Alert.Heading>
      </Alert>
      <Container>
        <Row className="row">
          <Card className="artist">
            <Card.Img variant="top" src="kishore.jpg" className="im" />
            <Card.Body>
              <Card.Title>Kishore Kumar</Card.Title>
              <Card.Text className="card-text">
              Kishore Kumar was an Indian playback singer and actor. He is widely regarded as one of the 
              greatest and most dynamic singers in the history of Indian music as well as one of the best singers of the Indian subcontinent of all time.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="artist">
            <Card.Img variant="top" src="arijit.jpg" className="im" />
            <Card.Body>
              <Card.Title>Arijit Singh</Card.Title>
              <Card.Text className="card-text">
              Arijit Singh is an Indian singer and music composer. He sings predominantly in Hindustani and Bengali, 
              but has also performed in various other Indian languages. He is the recipient of a National Award and six Filmfare Awards. 
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="artist">
            <Card.Img variant="top" src="lata.jpg" className="im" />
            <Card.Body>
              <Card.Title>Lata Mangeshkar</Card.Title>
              <Card.Text className="card-text">
              Lata Mangeshkar was an Indian playback singer and occasional music composer. 
              She is widely considered to have been one of the greatest and most influential singers in India.
              Lata recorded songs in over thirty-six Indian languages and a few foreign languages.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="artist">
            <Card.Img variant="top" src="shreya.jpg" className="im" />
            <Card.Body>
              <Card.Title>Shreya Ghoshal</Card.Title>
              <Card.Text className="card-text">
              Shreya Ghoshal is an Indian singer and television personality. One of the highest-paid and most well-established playback singers of Hindi cinema, she has received four National Film Awards, 
              four Kerala State Film Awards. 
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="artist">
            <Card.Img variant="top" src="lata.jpg" className="im" />
            <Card.Body>
              <Card.Title>Sonu Nigam</Card.Title>
              <Card.Text className="card-text">
              Nigam sings predominantly in Hindi and Kannada language films but has also sung in Bengali, Marathi, Telugu, Tamil, Odia, Bhojpuri, Gujarati, Malayalam, Nepali, Tulu and other Indian languages.
              He is known as the "Modern Rafi", a title given to him after his musical idol Mohammad Rafi.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="artist">
            <Card.Img variant="top" src="shreya.jpg" className="im" />
            <Card.Body>
              <Card.Title>Shreya Ghoshal</Card.Title>
              <Card.Text className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Row>
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Pricing</Modal.Title>
          <CloseButton onClick={handleClose} />
        </Modal.Header>
        <Modal.Body>
          Woohoo, you're one step closer to listen to your favourite songs! Pay
          Rs. 40/ month to enjoy uninturrupted streaming!
        </Modal.Body>
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

export default Cards1;
