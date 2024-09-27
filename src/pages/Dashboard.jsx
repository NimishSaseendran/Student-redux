import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DashCard from '../components/DashCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStudentThunk, addStudent, deleteStudent, updateStudent } from '../redux/slice/Studentslice';
import Spinner from 'react-bootstrap/Spinner';
import { Modal, Button, Form } from 'react-bootstrap';

function Dashboard() {
    const { students, loading, error, searchQuery } = useSelector((state) => state.studentReducer); // Added searchQuery
    const dispatch = useDispatch();

    const [show, setShow] = useState(false);
    const [isAdding, setIsAdding] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [newStudent, setNewStudent] = useState({
        id: students.length + 1,
        name: "",
        age: "",
        gender: "",
        email: "",
        phone: "",
        gpa: "",
        courses: [],
        image: ""
    });
    const [selectedStudent, setSelectedStudent] = useState(null);

    useEffect(() => {
        dispatch(fetchStudentThunk());
    }, [dispatch]);

    const handleClose = () => {
        setShow(false);
        setIsAdding(false);
        setIsEditing(false);
        setNewStudent({
            id: students.length + 1,
            name: "",
            age: "",
            gender: "",
            email: "",
            phone: "",
            gpa: "",
            courses: [],
            image: ""
        });
    };

    const handleShow = (student) => {
        setSelectedStudent(student);
        setIsEditing(false);
        setShow(true);
    };

    const handleAddStudent = () => {
        setIsAdding(true);
        setNewStudent({
            id: students.length + 1, 
            name: "",
            age: "",
            gender: "",
            email: "",
            phone: "",
            gpa: "",
            courses: [],
            image: ""
        });
        setShow(true);
    };

    const handleEditStudent = (student) => {
        setIsEditing(true);
        setSelectedStudent(student);
        setNewStudent(student);
        setShow(true);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewStudent({ ...newStudent, [name]: value });
    };

    const handleSubmit = () => {
        if (isAdding) {
            dispatch(addStudent(newStudent));
        } else if (isEditing) {
            dispatch(updateStudent(newStudent));
        }
        handleClose(); 
    };

    const filteredStudents = students.filter(student =>
        student.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <Header />
            <DashCard />

            <div className='container p-4'>
                <button className='btn btn-info w-25' onClick={handleAddStudent}>
                    Add Student <i className="fa-solid fa-plus ms-2" />
                </button>
                <p className='fw-light' style={{opacity:'0.6'}}>Note: Student details were taken from <mark>https://freetestapi.com/apis/students</mark>. Images shown here are from the API.</p>
            </div>

            <section className='container mt-4 d-flex flex-wrap justify-content-between'>
                {loading ? (
                    <h3>
                        <Spinner animation="border" role="status" />
                        Loading...
                    </h3>
                ) : error ? (
                    <h3>{error}</h3>
                ) : (
                    <>
                        {filteredStudents.length > 0 ? (
                            filteredStudents.map((item) => (
                                <div
                                    key={item.id}
                                    className='m-2'
                                    style={{
                                        width: '18rem',
                                        border: '1px solid #ccc',
                                        padding: '20px',
                                        borderRadius: '8px',
                                        maxWidth: '400px',
                                        backgroundColor: '#e6e6e6'
                                    }}
                                >
                                    <img src={item.image} style={{ height: '150px', objectFit: 'cover', borderRadius: '10px' }} className='img-fluid mb-2 w-100' alt="" />
                                    <p><strong>Name:</strong> {item.name}</p>
                                    <p><strong>Email:</strong> {item.email}</p>
                                    <p><strong>Phone:</strong> {item.phone}</p>
                                    <div className='d-flex justify-content-between'>
                                        <button className='btn btn-info' onClick={() => handleShow(item)}>
                                            View More
                                        </button>
                                        <button className='btn btn-outline-warning' onClick={() => handleEditStudent(item)}>
                                            <i className="fa-solid fa-pencil" />
                                        </button>
                                        <button className='btn btn-outline-danger' onClick={() => { dispatch(deleteStudent(item.id)) }}>
                                            <i className="fa-solid fa-trash" />
                                        </button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <h4>No students found matching your search.</h4>
                        )}
                    </>
                )}
            </section>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton className='bg-info'>
                    <Modal.Title>
                        {isAdding ? "Add New Student" : isEditing ? "Edit Student" : "Student Full Detail"}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ backgroundColor: '#b3ffff' }}>
                    {isAdding || isEditing ? (
                        <>
                            {/* Form for new or editing student */}
                            <Form>
                                <Form.Group>
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="name"
                                        value={newStudent.name}
                                        onChange={handleInputChange}
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Age</Form.Label>
                                    <Form.Control
                                        type="number"
                                        name="age"
                                        value={newStudent.age}
                                        onChange={handleInputChange}
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Gender</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="gender"
                                        value={newStudent.gender}
                                        onChange={handleInputChange}
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        value={newStudent.email}
                                        onChange={handleInputChange}
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="phone"
                                        value={newStudent.phone}
                                        onChange={handleInputChange}
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>GPA</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="gpa"
                                        value={newStudent.gpa}
                                        onChange={handleInputChange}
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Courses (comma separated)</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="courses"
                                        value={newStudent.courses.join(', ')}
                                        onChange={(e) => setNewStudent({ ...newStudent, courses: e.target.value.split(',') })}
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Image URL</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="image"
                                        value={newStudent.image}
                                        onChange={handleInputChange}
                                    />
                                </Form.Group>
                            </Form>
                        </>
                    ) : (
                        selectedStudent && (
                            <>
                                <img src={selectedStudent.image} alt={selectedStudent.name} style={{ width: '100%', height: '180px', borderRadius: '8px', objectFit: 'cover' }} />
                                <p><strong>Name:</strong> {selectedStudent.name}</p>
                                <p><strong>Age:</strong> {selectedStudent.age}</p>
                                <p><strong>Email:</strong> {selectedStudent.email}</p>
                                <p><strong>Phone:</strong> {selectedStudent.phone}</p>
                                <p><strong>Gender:</strong> {selectedStudent.gender}</p>
                                <p><strong>GPA:</strong> {selectedStudent.gpa}</p>
                                <p><strong>Courses:</strong> {selectedStudent.courses.join(', ')}</p>
                                <p><strong>ID:</strong> {selectedStudent.id}</p>
                            </>
                        )
                    )}
                </Modal.Body>
                <Modal.Footer className='bg-info'>
                    {(isAdding || isEditing) && (
                        <Button variant="primary" onClick={handleSubmit}>
                            {isAdding ? "Add Student" : "Update Student"}
                        </Button>
                    )}
                    <Button variant="primary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            <Footer />
        </>
    );
}

export default Dashboard;
