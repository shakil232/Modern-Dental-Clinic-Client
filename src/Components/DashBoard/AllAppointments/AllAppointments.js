import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import swal from 'sweetalert';



const AllAppointments = () => {
    const [appointments, setAppointments] = useState([]);

    //   loadAppointment-data 
    useEffect(() => {
        const url = `https://enigmatic-harbor-19096.herokuapp.com/allAppointments`
        axios.get(url)
            .then(res => setAppointments(res.data))
            .catch(err => swal("Failed!", "Please Try Again!", "error"))

    }, [appointments]);

    const handleStatusChange = (id, status) => {
        let modifiedOrders = [];
        appointments.forEach(appointment => {
            if (appointment._id === id) {
                appointment.status = status;
            }
            modifiedOrders.push(appointment)
        })
        setAppointments(modifiedOrders);

        const modifiedStatus = { id, status }

        const url = `https://enigmatic-harbor-19096.herokuapp.com/statusUpdate`
        axios.put(url, modifiedStatus)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    swal("Status Successfully Update", `Set to ${status}`, "success");
                }

            })
            .catch(err => swal("Failed!", "Please Try Again!", "error"))
    };


    return (
        <section className="container mt-4 ">
            <main className=" bg-white p-4 h-auto rounded-3 shadow-lg">
                <h3 className="custom-primary" >All-Appointment</h3>
                <div className="mt-4 table-responsive" id='no-more-tables'>

                    <Table className='table bg-white' striped>
                        <thead className='custom-primary'>
                            <tr>
                                <th>Name</th>
                                <th>Contact</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                appointments.map(appointment =>

                                    <tr key={appointment._id}>
                                        <td data-title='Name' > {appointment.serviceName} </td>
                                        <td data-title='Contact' > {appointment.PatientPhone} </td>
                                        <td data-title='Date' > {appointment.serviceDate} </td>
                                        <td data-title='Time' > {appointment.serviceTime} </td>
                                        <td data-title='Status' >
                                            <select
                                                className={appointment.status === "Pending" ? "btn btn-danger" : appointment.status === "Done" ? "btn btn-success" : "btn btn-info"}
                                                defaultValue={appointment.status}
                                                onChange={e => handleStatusChange(appointment._id, e.target.value)}>
                                                <option className="bg-white text-muted">Pending</option>
                                                <option className="bg-white text-muted">On-Going</option>
                                                <option className="bg-white text-muted">Done</option>
                                            </select>
                                        </td>
                                    </tr>

                                )
                            }
                        </tbody>

                    </Table>
                </div>
            </main>
        </section>
    );
};

export default AllAppointments;