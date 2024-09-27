import React from 'react';
import { Container, Navbar, Nav, Button, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

function Landing() {
    return (
        <>
            <Navbar bg="light" expand="lg" className='bg-black'>
                <Container>
                    <Navbar.Brand href="#home" className='text-white'>StudentManager</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home" className='text-white'>Home</Nav.Link>
                            <Nav.Link href="#features" className='text-white'>Features</Nav.Link>
                            <Nav.Link href="#about" className='text-white me-2'>About</Nav.Link>
                            <Button variant="primary" href="#login">Login</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Container fluid className="bg-primary text-white text-center py-5">
                <Row className="justify-content-center">
                    <Col md={8}>
                        <h1>Manage Students with Ease</h1>
                        <p>Streamline student management with real-time data, performance tracking, and easy-to-use features.</p>
                        <Link className='btn btn-dark w-25' to={'/dash'}>Get Started ..</Link>
                    </Col>
                </Row>
            </Container>

            <Container className="my-5" id="features">
                <h2 className="text-center">Features</h2>
                <Row className="text-center mt-4">
                    <Col md={4}>
                        <Card>
                            <Card.Body>
                                <Card.Title>📋 Student Management</Card.Title>
                                <Card.Text>Easily add, edit, and remove student records.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <Card.Body>
                                <Card.Title>📊 Performance Tracking</Card.Title>
                                <Card.Text>Monitor student progress and performance.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <Card.Body>
                                <Card.Title>🗂️ Classroom Organization</Card.Title>
                                <Card.Text>Categorize students by class and section.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

            <Container fluid className="bg-light text-center py-5" id="about">
                <Row className="justify-content-center">
                    <Col md={8}>
                        <h2>Why Choose StudentManager?</h2>
                        <p>Our system simplifies the way you manage students, track their performance, and organize classrooms. With real-time data, performance analytics, and easy access to information, managing students has never been easier.</p>
                    </Col>
                </Row>
            </Container>

            <Footer />
        </>
    );
}

export default Landing;
