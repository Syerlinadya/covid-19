import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

// navbar
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

// halaman
import Utama from "./Component/Utama";

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
          <Container>
              <Navbar.Brand href="#beranda"> World Covid-19 Tracker</Navbar.Brand>
                <Nav className="me-auto">
                  <Nav.Link href="/" >Beranda</Nav.Link>
                  <Nav.Link href="/berita">Berita</Nav.Link>
                  <Nav.Link href="/sebaran">Sebaran</Nav.Link>
                  <Nav.Link href="/informasi">Informasi</Nav.Link>
                </Nav>
          </Container>
      </Navbar>
      <p><Utama/></p>
    </div>
  );
}

export default App;
