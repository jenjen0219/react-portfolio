import React, { useState } from 'react';
import {
    MDBContainer,
    MDBCollapse,
    MDBNavbar,
    MDBNavbarToggler,
    MDBBtn,
} from 'mdb-react-ui-kit';
import Navbar from 'react-bootstrap/Navbar';


export default function App() {
    const [showAnimated, setShowAnimated] = useState(false);

    return (
        <>
            <section className='mb-3'>
                <MDBNavbar>
                    <MDBContainer fluid>

                        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        {/* <Navbar.Collapse id="basic-navbar-nav"> */}
                        <MDBNavbarToggler
                            type='button'
                            className='first-button'
                            data-target='#navbarToggleExternalContent'
                            aria-controls='navbarToggleExternalContent'
                            aria-expanded='false'
                            aria-label='Toggle navigation'
                            onClick={() => setShowAnimated(!showAnimated)}
                        >
                            <div className={`animated-icon1 ${showAnimated && 'open'}`}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </MDBNavbarToggler>
                    </MDBContainer>
                </MDBNavbar>

                <MDBCollapse show={showAnimated}>
                    <div className='bg-light shadow-3 p-4'>
                        <MDBBtn block className='border-bottom m-0' color='link'>
                            HOME
                        </MDBBtn>
                        <MDBBtn block className='border-bottom m-0' color='link'>
                            ABOUT ME
                        </MDBBtn>
                        <MDBBtn block className='border-bottom m-0' color='link'>
                            PORTFOLIO
                        </MDBBtn>
                        <MDBBtn block className='border-bottom m-0' color='link'>
                            RESUME
                        </MDBBtn>
                        <MDBBtn block className='border-bottom m-0' color='link'>
                            CONTACT ME
                        </MDBBtn>
                    </div>
                </MDBCollapse>
            </section>



        </>
    );
}