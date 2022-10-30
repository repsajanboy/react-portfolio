import React, {useState} from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  const [colorChange, setColorchange] = useState(false);
  const [activeLink, setActiveLink] = useState("#home")
  const changeNavbarColor = () =>{
     if(window.scrollY >= 80){
       setColorchange(true);
     }
     else{
       setColorchange(false);
     }
  };
  window.addEventListener('scroll', changeNavbarColor);
  return (
    <>
      <header id="home">
        <Container>
          <Navbar id="nav-wrap" expand="sm" fixed="top" className={colorChange ? 'navbar colorChange' : 'navbar'}>
            <Navbar.Toggle className="custom-toggler" aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
              <Nav defaultActiveKey={activeLink}>
                <Nav.Item>
                  <Nav.Link href="#home" eventKey="#home">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#about" eventKey="#about">About</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#resume" eventKey="#resume">Resume</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#works" eventKey="#works">Works</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#contact" eventKey="#contact">Contact</Nav.Link>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>

        <div className="row banner">
          <div className="banner-text">
            <h1>Hi!</h1>
            <h1>I am Jasper Janboy</h1>
            <h3>Web & Mobile Developer | Gamer | Run by Coffee ☕</h3>
            <hr />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
