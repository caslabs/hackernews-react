/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Navbar, Nav, Form, FormControl, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'; // Assuming your custom styles are here
import {newsItems} from './data';

export const CustomNavbar = () => {
    return (
      <Navbar expand="lg" style={{ backgroundColor: '#ff6600', height: '30px' }}>
        <Container fluid>
          <Navbar.Brand href="#" style={{ display: 'flex', alignItems: 'center', color: 'black', fontWeight: 'bold' }}>
            <img
              src="./y18.svg"
              alt="Hacker News"
              style={{ height: '24px', marginRight: '10px' }}
            />
            Hacker News
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#" className="text-black">new</Nav.Link>
              <span className="text-black">|</span>
              <Nav.Link href="#" className="text-black">past</Nav.Link>
              <span className="text-black">|</span>
              <Nav.Link href="#" className="text-black">comments</Nav.Link>
              <span className="text-black">|</span>
              <Nav.Link href="#" className="text-black">ask</Nav.Link>
              <span className="text-black">|</span>
              <Nav.Link href="#" className="text-black">show</Nav.Link>
              <span className="text-black">|</span>
              <Nav.Link href="#" className="text-black">jobs</Nav.Link>
              <span className="text-black">|</span>
              <Nav.Link href="#" className="text-black">submit</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};


export const NewsList = ({ newsItems }) => {
    return (
      <Container>
        {newsItems.map((item, index) => (
          <Row className="mb-2" key={index}>
            <Col xs={12}>
              <span className="text-muted">{index + 1}.</span>
              <a href={item.url} className="text-decoration-none">{item.title}</a>
              <small className="text-muted">({item.source})</small>
            </Col>
            <Col xs={12}>
              <small className="text-muted">
                {item.points} points by {item.author} {item.timePosted} | hide | {item.comments} comments
              </small>
            </Col>
          </Row>
        ))}
      </Container>
    );
  };

export const Footer = () => {
    return (
      <footer className="mt-auto py-3 border-top border-orange">
        <Container>
          <div className="d-flex justify-content-center align-items-center">
            <Nav.Link href="#" className="text-muted">Guidelines</Nav.Link>
            <span className="text-muted mx-2">|</span>
            <Nav.Link href="#" className="text-muted">FAQ</Nav.Link>
            <span className="text-muted mx-2">|</span>
            <Nav.Link href="#" className="text-muted">Lists</Nav.Link>
            <span className="text-muted mx-2">|</span>
            <Nav.Link href="#" className="text-muted">API</Nav.Link>
            <span className="text-muted mx-2">|</span>
            <Nav.Link href="#" className="text-muted">Security</Nav.Link>
            <span className="text-muted mx-2">|</span>
            <Nav.Link href="#" className="text-muted">Legal</Nav.Link>
            <span className="text-muted mx-2">|</span>
            <Nav.Link href="#" className="text-muted">Apply to YC</Nav.Link>
            <span className="text-muted mx-2">|</span>
            <Nav.Link href="#" className="text-muted">Contact</Nav.Link>
          </div>
          <div className="mt-3 d-flex justify-content-center">
            <Form className="d-flex">
              <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" />
            </Form>
          </div>
        </Container>
      </footer>
    );
  };

const HackerClone = () => (
    <div style={{ maxWidth: '75%', margin: '0 auto' }}>
        <CustomNavbar />
        <NewsList newsItems={newsItems} />
        <Footer />
    </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HackerClone />);
