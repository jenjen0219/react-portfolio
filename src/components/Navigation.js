// import { useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Navigation() {
    return (
        <>
     
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="/">Jennifer Gutierrez Manjares</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
           <div className="justify-content-end">
                    <Navbar.Collapse  id="basic-navbar-nav">
                        <Nav className="me-auto " >
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/about">About Me</Nav.Link>
                            <Nav.Link href="/portfolio">Portfolio</Nav.Link>
                            <Nav.Link href="/resume">Resume</Nav.Link>
                            <Nav.Link href="/contact">Contact Me</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    </div>
            
                </Container>
        </Navbar>

        </>
    );
}

    export default Navigation



