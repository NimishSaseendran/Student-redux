import React from 'react';
import { useSelector } from 'react-redux';

const StudentList = () => {
    const students = useSelector((state) => state.students.students);
    const searchQuery = useSelector((state) => state.students.searchQuery);

    const filteredStudents = students.filter(student =>
        student.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            <h2>Student List</h2>
            <ul>
                {filteredStudents.length > 0 ? (
                    filteredStudents.map(student => (
                        <li key={student.id}>{student.name}</li>
                    ))
                ) : (
                    <li>No students found</li>
                )}
            </ul>
        </div>
    );
};

export default StudentList;
