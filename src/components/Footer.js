// import { useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Footer() {
    return (
        <>
            <footer >
                <Navbar className="specialText">
                    <Container className="justify-content-center ">
                        <Navbar.Brand className="specialText"> Created By Jennifer Gutierrez Manjares - 2023</Navbar.Brand>

                    </Container>
                </Navbar>
            </footer>
        </>
    );
}

export default Footer


