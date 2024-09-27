import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery, fetchStudentThunk } from '../redux/slice/Studentslice';
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchStudentThunk());
    }, [dispatch]);

    const handleSearchChange = (e) => {
        const query = e.target.value.toLowerCase();
        dispatch(setSearchQuery(query));
        console.log('Search Query:', query);
    };

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home" className='fw-semibold fs-4'>Student Management System</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <div className='d-flex align-items-center'>
                                <input
                                    type="text"
                                    className='form-control'
                                    placeholder='Search for student'
                                    onChange={handleSearchChange}
                                />
                                <button className='btn'>
                                    <i className="fa-solid fa-magnifying-glass me-3" />
                                </button>
                                <Dropdown>
                                    <Dropdown.Toggle variant="info" id="dropdown-basic">
                                        Choose Language
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">English</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Malayalam</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Hindi</Dropdown.Item>
                                        <Dropdown.Item href="#/action-4">Tamil</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <i className="fa-regular fa-bell mx-4" />
                                <div className='d-flex align-items-center'>
                                    <i className="fa-solid fa-user me-1" /> Profile
                                </div>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </>
    );
}

export default Header;
