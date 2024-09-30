import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../../assets/travel.svg'

// Define the interface for the props
interface BasicExampleProps {
  isLoggedIn: boolean;
  userName: string;
}

// Use the interface in the function component definition
const BasicExample: React.FC<BasicExampleProps> = ({ isLoggedIn = false, userName = '' }) => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          {/* Your logo component or image here */}
          <img src={Logo} alt={"Your Logo"} style={{ height: "2rem" }} /> {/* Replace with your logo path */}
          <span className="ms-2">   Preview It</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          {isLoggedIn ? (
            <Nav>
              <NavDropdown title={userName} id="user-dropdown">
                <NavDropdown.Item href="#save-preferences">
                  Save Preferences
                </NavDropdown.Item>
                <NavDropdown.Item href="#logout">Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          ) : (
            <Nav.Link href="#signin">Sign In</Nav.Link>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
