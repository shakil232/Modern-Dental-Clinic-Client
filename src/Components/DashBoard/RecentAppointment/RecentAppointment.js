import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import { Table } from 'react-bootstrap';


const RecentAppointment = () => {
    const [selectDate, setSelectDate] = useState(new Date());

    const handelDateChange = date => {
        setSelectDate(date)
    };

    return (
        <main className="container">
            <div style={{ height: '600px' }} className="d-flex align-content-center row g-4">
                <div className="col-md-5">
                    <h2 className="custom-dark "> Recent Appointment-{selectDate.toDateString()} </h2>
                    
                    <div >
                        <Calendar className="border-0 shadow-lg "
                            onChange={handelDateChange}
                            value={new Date()} />
                    </div>
                </div>

                <div className="col-md-7  m-auto">
                    <Table striped hover >
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Time</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td> Teath Cleaning</td>
                                <td>8:30-10.00 pm</td>
                                <td>Approved</td>
                            </tr>
                            <tr>
                                <td> Teath Cleaning</td>
                                <td>8:30-10.00 pm</td>
                                <td>Approved</td>
                            </tr>
                            <tr>
                                <td> Teath Cleaning</td>
                                <td>8:30-10.00 pm</td>
                                <td>Approved</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </main>
    );
};

export default RecentAppointment;