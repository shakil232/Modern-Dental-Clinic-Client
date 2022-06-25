import React, { useEffect, useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import { Col, Container, Row, Table } from 'react-bootstrap';
import axios from 'axios';
import swal from 'sweetalert';



const RecentAppointment = () => {
    const [selectDate, setSelectDate] = useState(new Date());
    const [todayAppointment, setTodayAppointment] = useState([]);

    // handelDate-Change 
    const handelDateChange = date => {
        setSelectDate(date)
    };


    const localDate = selectDate.toLocaleDateString();
    // loadRecent-Service 
    useEffect(() => {
        const url = `https://enigmatic-harbor-19096.herokuapp.com/appointmentByDate?date=${localDate}`
        axios.get(url)
            .then(res => setTodayAppointment(res.data))
            .catch(err => swal("Failed!", "Please Try Again!", "error"))

    }, [localDate]);


    return (
        <Container style={{ height: '600px' }}>
            <h4 className="custom-dark text-center fw-bold"> Today Appointment-{selectDate.toDateString()} </h4>

            <Row className="d-flex justify-content-center mt-5 g-2">
                <Col md={5} sm={12} className=" px-3">
                    <Calendar className="border-0 shadow-lg rounded-3 "
                        onChange={handelDateChange}
                        value={new Date()} />
                </Col>

                <Col md={7} sm={12} className="h-auto px-2 bg-white shadow rounded-3">
                    <div className="mt-4 table-responsive" id='no-more-tables'>
                        <Table className='table bg-white' striped>
                            <thead>
                                <tr className='custom-primary'>
                                    <th>PatientName</th>
                                    <th>Service</th>
                                    <th>Time</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    todayAppointment.map(today =>

                                        <tr key={today._id}>
                                            <td data-title='PatientName' > {today.PatientName} </td>
                                            <td data-title='Service' > {today.serviceName} </td>
                                            <td data-title='Time' > {today.serviceTime} </td>
                                            <td data-title='Status' >
                                                <p className={`book-${today.status}  rounded-3 text-white text-center`}>{today.status}</p>
                                            </td>
                                        </tr>

                                    )
                                }
                            </tbody>
                        </Table>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default RecentAppointment;