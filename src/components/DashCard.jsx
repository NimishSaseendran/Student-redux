import React from 'react'
import { useSelector } from 'react-redux';


function DashCard() {

    const { students } = useSelector((state) => state.studentReducer);
    const length = students.length

    return (
        <>
            <div className='container d-flex flex-wrap justify-content-between bg-light py-4 rounded-4'>
                <div className='d-flex align-items-center justify-content-between bg-info p-3 rounded-3 m-2' style={{ width: '18rem' }}>
                    <div className='text-center'>
                        <img style={{ width: '50px' }} className='img-fluid' src="https://www.svgrepo.com/show/483464/person.svg" alt="person" />
                        <p className='fw-semibold fs-5'>Students</p>
                    </div>
                    <div>
                        <p className='m-0 fw-semibold'>{length}</p>
                    </div>
                </div>
                <div className='d-flex align-items-center justify-content-between bg-warning p-3 rounded-3 m-2' style={{ width: '18rem' }}>
                    <div className='text-center'>
                        <img style={{ width: '50px' }} className='img-fluid' src="https://www.svgrepo.com/show/192313/teacher.svg" alt="person" />
                        <p className='fw-semibold fs-5'>Teachers</p>
                    </div>
                    <div>
                        <p className='m-0 fw-semibold'>{Math.ceil(length/4)}</p>
                    </div>
                </div>
                <div className='d-flex align-items-center justify-content-between bg-dark-subtle p-3 rounded-3 m-2' style={{ width: '18rem' }}>
                    <div className='text-center'>
                        <img style={{ width: '50px' }} className='img-fluid' src="https://www.svgrepo.com/show/227577/parents.svg" alt="person" />
                        <p className='fw-semibold fs-5'>Parents</p>
                    </div>
                    <div>
                        <p className='m-0 fw-semibold'>{Math.ceil(length/2)}</p>
                    </div>
                </div>
                <div className='d-flex align-items-center justify-content-between bg-success p-3 rounded-3 m-2' style={{ width: '18rem' }}>
                    <div className='text-center'>
                        <img style={{ width: '50px' }} className='img-fluid' src="https://www.svgrepo.com/show/263759/money.svg" alt="person" />
                        <p className='fw-semibold fs-5'>Total Earnings</p>
                    </div>
                    <div>
                        <p className='m-0 fw-semibold'>${length*500}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashCard