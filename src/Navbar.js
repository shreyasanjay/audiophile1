import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
class MyNav extends React.Component{
  render(){
    return(
      <div>
        <Navbar expand='md' className='navb' variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="#home"><img
              src="./logo.png"
              width="100"
              height="50"
              className="alignm d-inline-block align-top"
              alt="AudioPhile Logo"
            /></Navbar.Brand>
          <Nav className="mx-auto navbar_wrapper">
            <Link to='/' className='navl'>Home</Link>&nbsp;&nbsp;
            <Link to='/aboutus' className='navl'>About Us</Link>&nbsp;&nbsp;
            <Link to='/pricing' className='navl'>Pricing</Link>&nbsp;&nbsp;
            <Link to='/login' className='navl'>Login</Link>&nbsp;&nbsp;
            <Link to='/register' className='navl'>Register</Link>&nbsp;&nbsp;
          </Nav>
        </Container>
      </Navbar>
      <br />
      </div>
    );
  }
}
export default MyNav;
