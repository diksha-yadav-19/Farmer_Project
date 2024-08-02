import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TodoList from '../Components/Todolist';
import Profile from './Profile';
import Footer from './Footer';
import Home from '../Context/Home';
import BsCards from './BScards';

function NavBar() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const updateOnlineStatus = () => {
      setIsOnline(navigator.onLine);
    };

    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);

    return () => {
      window.removeEventListener('online', updateOnlineStatus);
      window.removeEventListener('offline', updateOnlineStatus);
    };
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar bg="primary" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/bscardcard">Bootstrap Cards</Nav.Link>
                <Nav.Link href="/filtercard">TODO list</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Item>
                  <Nav.Link style={{ color: isOnline ? 'black' : 'gray' }}>
                    {isOnline ? 'You\'re Online' : 'You\'re Offline'}
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bscardcard" element={<BsCards />} />
          <Route path="/filtercard" element={<TodoList />} />
          <Route path="*" element={<Profile />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default NavBar;

