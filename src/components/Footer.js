// import { useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Footer() {
    return (
        <>
        <div >
            <Navbar class="text-success" bg="light"  expand="lg">
                <Container className="justify-content-center footerEdit">
                    <Navbar.Brand  > Created By Jennifer Gutierrez Manjares - 2023</Navbar.Brand>
                   
                </Container>
        </Navbar>
        </div>
        </>
    );
}

    export default Footer


