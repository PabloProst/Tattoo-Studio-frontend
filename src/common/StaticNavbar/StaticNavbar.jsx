import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './StaticNavbar.css'; 4
import { useSelector, useDispatch } from "react-redux";
import { logout, userData } from "../../pages/userSlice";


export const StaticNavbar = () => {
  const dispatch = useDispatch();
  const rdxCredentials = useSelector(userData);

  const logOutMe = () => {

    dispatch(logout({ credentials: "" }))
  }

  return (
    <Navbar expand="lg" className="bg-dark navbarStatic fixed-top">
      <Container className='container-navbar'>
        <Navbar.Brand><img className='headerLogo' src={'../src/assets/img/onlyLogo.png'} alt="Logo" /></Navbar.Brand>
        <Navbar.Brand className='text-white text-navbar-title' href="/">DYNAMIC <span className='blueColour'>INK</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto navbar-links">
            <Nav.Link className='text-navbar items-navbar' href="/">HOME</Nav.Link>
            <Nav.Link className='text-navbar items-navbar' href="/gallery">GALLERY</Nav.Link>
            <Nav.Link className='text-navbar items-navbar' href="/crew">CREW</Nav.Link>
            {!rdxCredentials?.credentials.token ? (
              <>
                <Nav.Link className='text-navbar items-navbar' href="/login">LOGIN</Nav.Link>
                <Nav.Link className='text-navbar items-navbar' href="/register">REGISTER</Nav.Link>
              </>
            ) : (
              <>
               <Nav.Link className='text-navbar items-navbar' href="/appointments">APPOINTMENTS</Nav.Link>
                <Nav.Link className='text-navbar items-navbar' href="/profile">{rdxCredentials.credentials.name}</Nav.Link>
                <div onClick={logOutMe}>
                  <Nav.Link className='text-navbar items-navbar' href="/">LOG OUT</Nav.Link>
                </div>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
