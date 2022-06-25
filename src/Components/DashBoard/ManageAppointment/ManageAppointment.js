import React, { useEffect, useState } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';




const ManageAppointment = ({ restrictPermission }) => {
    const navigate = useNavigate();
    const [allService, setAllService] = useState([]);

    // loadAllService-data 
    useEffect(() => {
        const url = `https://enigmatic-harbor-19096.herokuapp.com/allServices`
        axios.get(url)
            .then(res => setAllService(res.data))
            .catch(err => swal("Failed!", "Please Try Again!", "error"))

    }, [allService]);


    // Edit-service
    const handelEdit = editId => {
        const url = `updateService/${editId}`;
        navigate(url)
    };

    // delete-service
    const handelDelete = deleteId => {
        if (restrictPermission(deleteId)) {
            return swal("Permission restriction!", "As a test-admin, you don't have permission to delete 6 core services. But you can delete your added services.", "info");
        }


        swal({
            title: "Are you sure?",
            text: "Are you sure you want to delete this service?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    const url = `https://enigmatic-harbor-19096.herokuapp.com/serviceDelete/${deleteId}`
                    axios.delete(url)
                        .then(res => {
                            if (res.data.deletedCount > 0) {
                                swal("Successfully Deleted!", "Your service has been successfully deleted.", {
                                    icon: "success",
                                });
                                const remainingService = allService.filter(services => services._id !== deleteId);
                                setAllService(remainingService)
                            }
                        });
                }
                else {
                    swal("Your service file is safe!");
                }

            });

    };



    return (
        <Container className="mt-4 pb-5">

            <main className=" bg-white p-4 h-auto rounded-3 shadow-lg">
                <h3 className="custom-primary">Manage Appointments</h3>
                <div className="mt-4">

                    <Table striped borderless responsive>
                        <thead>
                            <tr className="custom-primary">
                                <th>Name</th>
                                <th>Time</th>
                                <th>Space</th>
                                <th>Cost</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                allService.map(service =>

                                    <tr key={service._id}>
                                        <td> {service.servicesName} </td>
                                        <td> {service.servicesTime} </td>
                                        <td> {service.servicesSpace} </td>
                                        <td> {service.servicesCost} </td>
                                        <td>
                                            <Button onClick={() => handelEdit(service._id)} className="text-black" variant="outline-warning" size="sm">
                                                <FontAwesomeIcon icon={faPenToSquare} /> Edit

                                            </Button>

                                            <Button onClick={() => handelDelete(service._id)} className="ms-2" variant="outline-danger" size="sm" >
                                                <FontAwesomeIcon icon={faTrashCan} />  Delete
                                            </Button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </Table>

                </div>
            </main>
        </Container>
    );
};

export default ManageAppointment;