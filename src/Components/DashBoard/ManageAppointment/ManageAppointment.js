import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import {  useNavigate } from 'react-router-dom';


const ManageAppointment = () => {

    const navigate = useNavigate();

    // Edit-service
    const handelEdit = (Id) => {
        const url = `updateService/${Id}`;
        navigate(url)
    };

    // delete-service
    const handelDelete = () => {

    }

    return (
        <section className="container mt-4 ">
            <main className=" bg-white p-4 h-auto rounded-3 shadow-lg">
                <h3 className="text-info">Manage Appointments</h3>
                <div className="mt-4">

                    <Table striped hover>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Space</th>
                                <th>Time</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td> Teath Cleaning</td>
                                <td>$ 54</td>
                                <td>10</td>
                                <td>8:30-10.00 pm</td>
                                <td>
                                    <Button onClick={() => handelEdit('nameShakil')}  className="text-black" variant="outline-warning" size="sm">
                                        <FontAwesomeIcon  icon={faPenToSquare} /> Edit
                                  
                                    </Button>
                                    
                                    <Button onClick={handelDelete} className="ms-2" variant="outline-danger" size="sm" >
                                        <FontAwesomeIcon icon={faTrashCan} />  Delete
                                    </Button>
                                </td>
                            </tr>
                            <tr>
                                <td> Teath Cleaning</td>
                                <td>$ 54</td>
                                <td>10</td>
                                <td>8:30-10.00 pm</td>
                                <td>
                                    <Button onClick={() => handelEdit('namePrince')} className="text-black" variant="outline-warning" size="sm">
                                        <FontAwesomeIcon  icon={faPenToSquare} /> Edit
                                    </Button>

                                    <Button className="ms-2" variant="outline-danger" size="sm" >
                                        <FontAwesomeIcon onClick={handelDelete} icon={faTrashCan} />  Delete
                                    </Button>
                                </td>
                            </tr>
                            <tr>
                                <td> Teath Cleaning</td>
                                <td>$ 54</td>
                                <td>10</td>
                                <td>8:30-10.00 pm</td>
                                <td>
                                    <Button onClick={() => handelEdit('nameHridoy')} className="text-black" variant="outline-warning" size="sm">
                                        <FontAwesomeIcon  icon={faPenToSquare} /> Edit
                                    </Button>

                                    <Button className="ms-2" variant="outline-danger" size="sm" >
                                        <FontAwesomeIcon onClick={handelDelete}  icon={faTrashCan} />  Delete
                                    </Button>
                                </td>
                            </tr>
                            <tr>
                                <td> Teath Cleaning</td>
                                <td>$ 54</td>
                                <td>10</td>
                                <td>8:30-10.00 pm</td>
                                <td>
                                    <Button onClick={() => handelEdit('nameMosha')} className="text-black" variant="outline-warning" size="sm">
                                        <FontAwesomeIcon  icon={faPenToSquare} /> Edit
                                    </Button>

                                    <Button className="ms-2" variant="outline-danger" size="sm" >
                                        <FontAwesomeIcon onClick={handelDelete} icon={faTrashCan} />  Delete
                                    </Button>
                                </td>
                            </tr>
                            <tr>
                                <td> Teath Cleaning</td>
                                <td>$ 54</td>
                                <td>10</td>
                                <td>8:30-10.00 pm</td>
                                <td>
                                    <Button onClick={() => handelEdit('nameJoba')} className="text-black" variant="outline-warning" size="sm">
                                        <FontAwesomeIcon   icon={faPenToSquare} /> Edit
                                    </Button>

                                    <Button className="ms-2" variant="outline-danger" size="sm" >
                                        <FontAwesomeIcon onClick={handelDelete}  icon={faTrashCan} />  Delete
                                    </Button>
                                </td>
                            </tr>
                            <tr>
                                <td> Teath Cleaning</td>
                                <td>$ 54</td>
                                <td>10</td>
                                <td>8:30-10.00 pm</td>
                                <td>
                                    <Button onClick={() => handelEdit('namePzza')} className="text-black" variant="outline-warning" size="sm">
                                        <FontAwesomeIcon icon={faPenToSquare} /> Edit
                                    </Button>

                                    <Button className="ms-2" variant="outline-danger" size="sm" >
                                        <FontAwesomeIcon onClick={handelDelete}  icon={faTrashCan} />  Delete
                                    </Button>
                                </td>
                            </tr>
                            <tr>
                                <td> Teath Cleaning</td>
                                <td>$ 54</td>
                                <td>10</td>
                                <td>8:30-10.00 pm</td>
                                <td>
                                    <Button onClick={() => handelEdit('nameMamun')} className="text-black" variant="outline-warning" size="sm">
                                        <FontAwesomeIcon  icon={faPenToSquare} /> Edit
                                    </Button>

                                    <Button className="ms-2" variant="outline-danger" size="sm" >
                                        <FontAwesomeIcon onClick={handelDelete} icon={faTrashCan} />  Delete
                                    </Button>
                                </td>
                            </tr>
                            <tr>
                                <td> Teath Cleaning</td>
                                <td>$ 54</td>
                                <td>10</td>
                                <td>8:30-10.00 pm</td>
                                <td>
                                    <Button onClick={() => handelEdit('nameTnt')} className="text-black" variant="outline-warning" size="sm">
                                        <FontAwesomeIcon   icon={faPenToSquare} /> Edit
                                    </Button>

                                    <Button className="ms-2" variant="outline-danger" size="sm" >
                                        <FontAwesomeIcon onClick={handelDelete} icon={faTrashCan} />  Delete
                                    </Button>
                                </td>
                            </tr>
                            <tr>
                                <td> Teath Cleaning</td>
                                <td>$ 54</td>
                                <td>10</td>
                                <td>8:30-10.00 pm</td>
                                <td>
                                    <Button onClick={() => handelEdit('nameShamin')} className="text-black" variant="outline-warning" size="sm">
                                        <FontAwesomeIcon icon={faPenToSquare} /> Edit
                                    </Button>

                                    <Button className="ms-2" variant="outline-danger" size="sm" >
                                        <FontAwesomeIcon onClick={handelDelete} icon={faTrashCan} />  Delete
                                    </Button>
                                </td>
                            </tr>

                        </tbody>
                    </Table>

                </div>
            </main>
        </section>
    );
};

export default ManageAppointment;