import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

function Navigasi() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#beranda">Covid-19 Tracker</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#beranda">Beranda</Nav.Link>
                        <Nav.Link href="#berita">Berita</Nav.Link>
                        <Nav.Link href="#sebaran">Sebaran</Nav.Link>
                        <Nav.Link href="#informasi">Informasi Penting</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navigasi;
