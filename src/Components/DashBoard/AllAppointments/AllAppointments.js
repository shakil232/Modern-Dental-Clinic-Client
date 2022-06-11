import React from 'react';
import { Form, Table } from 'react-bootstrap';
import './AllAppointment.css'



const AllAppointments = () => {
    return (
        <section className="container mt-4 ">
            <main className=" bg-white p-4 h-auto rounded-3 shadow-lg">
                <h3 className="custom-primary" >All-Appointment</h3>
                <div className="mt-4">
                    <Table striped bordered hover>
                        <thead>
                            <tr className='custom-primary'>
                                <th>Name</th>
                                <th>Contact</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>adam</td>
                                <td>01718160232</td>
                                <td>22-22-22</td>
                                <td>8:30-10.00 pm</td>
                                <td>
                                    <Form.Select className="">
                                        <option >Pending</option>
                                        <option value="1">Pending</option>
                                        <option value="2">Approved</option>
                                        <option value="3">Cancelled</option>
                                    </Form.Select>
                                </td>
                            </tr>
                            <tr>
                                <td>adam</td>
                                <td>01718160232</td>
                                <td>22-22-22</td>
                                <td>8:30-10.00 pm</td>
                                <td>
                                    <Form.Select className="">
                                        <option >Pending</option>
                                        <option value="1">Pending</option>
                                        <option value="2">Approved</option>
                                        <option value="3">Cancelled</option>
                                    </Form.Select>
                                </td>
                            </tr>
                            <tr>
                                <td>adam</td>
                                <td>01718160232</td>
                                <td>22-22-22</td>
                                <td>8:30-10.00 pm</td>
                                <td>
                                    <Form.Select className="">
                                        <option >Pending</option>
                                        <option value="1">Pending</option>
                                        <option value="2">Approved</option>
                                        <option value="3">Cancelled</option>
                                    </Form.Select>
                                </td>
                            </tr>
                            <tr>
                                <td>adam</td>
                                <td>01718160232</td>
                                <td>22-22-22</td>
                                <td>8:30-10.00 pm</td>
                                <td>
                                    <Form.Select className="">
                                        <option >Pending</option>
                                        <option value="1">Pending</option>
                                        <option value="2">Approved</option>
                                        <option value="3">Cancelled</option>
                                    </Form.Select>
                                </td>
                            </tr>
                            <tr>
                                <td>adam</td>
                                <td>01718160232</td>
                                <td>22-22-22</td>
                                <td>8:30-10.00 pm</td>
                                <td>
                                    <Form.Select aria-label="Default select example">
                                        <option >Pending</option>
                                        <option value="1">Pending</option>
                                        <option value="2">Approved</option>
                                        <option value="3">Cancelled</option>
                                    </Form.Select>
                                </td>
                            </tr>
                            <tr>
                                <td>adam</td>
                                <td>01718160232</td>
                                <td>22-22-22</td>
                                <td>8:30-10.00 pm</td>
                                <td>
                                    <Form.Select aria-label="Default select example">
                                        <option >Pending</option>
                                        <option value="1">Pending</option>
                                        <option value="2">Approved</option>
                                        <option value="3">Cancelled</option>
                                    </Form.Select>
                                </td>
                            </tr>
                            <tr>
                                <td>adam</td>
                                <td>01718160232</td>
                                <td>22-22-22</td>
                                <td>8:30-10.00 pm</td>
                                <td>
                                    <Form.Select aria-label="Default select example">
                                        <option >Pending</option>
                                        <option value="1">Pending</option>
                                        <option value="2">Approved</option>
                                        <option value="3">Cancelled</option>
                                    </Form.Select>
                                </td>
                            </tr>
                            <tr>
                                <td>adam</td>
                                <td>01718160232</td>
                                <td>22-22-22</td>
                                <td>8:30-10.00 pm</td>
                                <td>
                                    <Form.Select aria-label="Default select example">
                                        <option >Pending</option>
                                        <option value="1">Pending</option>
                                        <option value="2">Approved</option>
                                        <option value="3">Cancelled</option>
                                    </Form.Select>
                                </td>
                            </tr>
                            <tr>
                                <td>adam</td>
                                <td>01718160232</td>
                                <td>22-22-22</td>
                                <td>8:30-10.00 pm</td>
                                <td>
                                    <Form.Select aria-label="Default select example">
                                        <option >Pending</option>
                                        <option value="1">Pending</option>
                                        <option value="2">Approved</option>
                                        <option value="3">Cancelled</option>
                                    </Form.Select>
                                </td>
                            </tr>
                            <tr>
                                <td>adam</td>
                                <td>01718160232</td>
                                <td>22-22-22</td>
                                <td>8:30-10.00 pm</td>
                                <td>
                                    <Form.Select aria-label="Default select example">
                                        <option >Pending</option>
                                        <option value="1">Pending</option>
                                        <option value="2">Approved</option>
                                        <option value="3">Cancelled</option>
                                    </Form.Select>
                                </td>
                            </tr>


                        </tbody>
                    </Table>
                </div>
            </main>
        </section>
    );
};

export default AllAppointments;