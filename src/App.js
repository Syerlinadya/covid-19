import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
          <Container>
              <Navbar.Brand href="#beranda">Covid-19 Tracker</Navbar.Brand>
              <BrowserRouter>
                  <Nav className="me-auto">
                      <Nav.Link href="#beranda">Beranda</Nav.Link>
                      <Nav.Link href="#berita">Berita</Nav.Link>
                      <Nav.Link href="#sebaran">Sebaran</Nav.Link>
                      <Nav.Link href="#informasi">Informasi Penting</Nav.Link>
                  </Nav>
              </BrowserRouter>
          </Container>
      </Navbar>
    </div>
  );
}

export default App;
