import React from 'react';
import './Pricing.css';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import Modal from 'react-bootstrap/Modal';
export default function Pricing (){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div className="title">Pricing Plans</div><br />
            <CardGroup className='grp'>
                <Card className='card1'>
                    <Card.Img variant="top" src="./price1.jpg" height='250' />
                    <Card.Body>
                        <Card.Title>Basic</Card.Title>
                        <Card.Text>
                        Enjoy benefits of our Basic plan at just <h2>Rs. 399/Year</h2>.
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item><h5>&#9989;&nbsp;Ad. Free unlimited music streaming</h5></ListGroup.Item>
                        <ListGroup.Item><h5>&#9989;&nbsp;Access to unreleased songs a day before</h5></ListGroup.Item>
                        <ListGroup.Item><h5>&#10060;&nbsp;Get 50% off on international artists' concerts</h5></ListGroup.Item>
                        <ListGroup.Item><h5>&#10060;&nbsp;Book recording studios for personal recording</h5></ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link href="#" onClick={handleShow}>Pay</Card.Link>
                    </Card.Body>
                </Card>&nbsp;&nbsp;
                <Card className='card2'>
                    <Card.Img variant="top" src="./price2.png" height='250' />
                    <Card.Body>
                        <Card.Title>Standard</Card.Title>
                        <Card.Text>
                            Enjoy benefits of our Standard plan at just <h2>Rs. 599/Year</h2>.
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item><h5>&#9989;&nbsp;Ad. Free unlimited music streaming</h5></ListGroup.Item>
                        <ListGroup.Item><h5>&#9989;&nbsp;Access to unreleased songs a day before</h5></ListGroup.Item>
                        <ListGroup.Item><h5>&#9989;&nbsp;Get 50% off on international artists' concerts</h5></ListGroup.Item>
                        <ListGroup.Item><h5>&#10060;&nbsp;Book recording studios for personal recording</h5></ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link href="#" onClick={handleShow}>Pay</Card.Link>
                    </Card.Body>
                </Card>&nbsp;&nbsp;
                <Card className='card1'>
                    <Card.Img variant="top" src="./price3.png" height='250' />
                    <Card.Body>
                        <Card.Title>Premium</Card.Title>
                        <Card.Text>
                            Enjoy benefits of our Premium plan at just <h2>Rs. 999/Year</h2>.
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item><h5>&#9989;&nbsp;Ad. Free unlimited music streaming</h5></ListGroup.Item>
                        <ListGroup.Item><h5>&#9989;&nbsp;Access to unreleased songs a day before</h5></ListGroup.Item>
                        <ListGroup.Item><h5>&#9989;&nbsp;Get 50% off on international artists' concerts</h5></ListGroup.Item>
                        <ListGroup.Item><h5>&#9989;&nbsp;Book recording studios for personal recording</h5></ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link href="#" onClick={handleShow}>Pay</Card.Link>
                    </Card.Body>
                </Card>&nbsp;&nbsp;
            </CardGroup>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}>
                <Modal.Header closeButton>
                <Modal.Title>Payment</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div>
                            <label>Card Number</label>
                            <input className="input" type="text" maxLength={12} required />
                        </div>
                        <div>
                            <label>CVV</label>
                            <input className="input" type="password" maxLength={3} required />
                        </div>
                        <div>
                            <label>Expiry Month</label>
                            <input className="input" type="month" required />
                        </div>
                        <div>
                            <label>Name on card</label>
                            <input className="input" type="text" />
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary">Pay Now</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}