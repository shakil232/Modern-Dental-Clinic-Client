import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FloatingLabel, Form, Button, Row, Col, Container, Table } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import swal from 'sweetalert';
import useAuth from '../../../hooks/useAuth'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'



const MakeAdmin = () => {
    const { register, handleSubmit, reset } = useForm();
    const [allAdmin, setAllAdmin] = useState([]);
    const { user } = useAuth();

    //  make-admin-handler 
    const onSubmit = data => {
        if (user.email === "test@gmail.com") {
            return swal("Permission restriction!", "As a test-admin, you don't have this permission.", "info");

        }

        const adminInfo = {
            'adminName': data.name,
            'adminRole': data.role,
            'adminEmail': data.email,
        }
        // MAKE-ADMIN-Post-Api 
        const url = `https://enigmatic-harbor-19096.herokuapp.com/makeAdmin`
        axios.post(url, adminInfo)
            .then(res => {
                if (res.data.insertedId) {
                    swal({
                        title: "Successfully Added",
                        text: "Your new Admin has been successfully added.",
                        icon: "success",
                        button: "ok",
                    });
                    reset()
                }
            })
            .catch(err => swal("Failed!", "Please Try Again!", "error"))
    };

    // MAKE-ADMIN-GET-Api 
    useEffect(() => {
        const url = `https://enigmatic-harbor-19096.herokuapp.com/allAdmin`
        axios.get(url)
            .then(res => setAllAdmin(res.data))
            .catch(err => swal("Failed!", "Please Try Again!", "error"))
    }, [allAdmin]);

    // delete-admin
    const handelDelete = removeId => {
        if (user.email === "test@gmail.com") {
            return swal("Permission restriction!", "As a test-admin, you don't have this permission.", "info");
        }

        swal({
            title: "Are you sure?",
            text: "Are you sure you want to delete this Admin?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    const url = `https://enigmatic-harbor-19096.herokuapp.com/adminDelete/${removeId}`
                    axios.delete(url)
                        .then(res => {
                            if (res.data.deletedCount > 0) {
                                swal("Successfully Deleted!", "Admin successfully deleted.", {
                                    icon: "success",
                                });
                                const remainingService = allAdmin.filter(admin => admin._id !== removeId);
                                setAllAdmin(remainingService)
                            }
                        });
                }
                else {
                    swal("Your Admin  is safe!");
                }

            });

    };



    return (
        <Container className="custom-height mt-4 ">

            <main className=" bg-white p-5  rounded-3 shadow-lg">
                <Row className="g-4">
                    {/* admin-list */}
                    <Col className="mx-auto" sm={12} md={5}>
                        <h4 className="custom-primary">Admin List</h4>
                        <div className="mt-3">
                            <Table hover borderless responsive>
                                <thead>
                                    <tr className='custom-primary'>
                                        <th>Admin-Name</th>
                                        <th>Admin-Role</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        allAdmin.map(addAD =>
                                            <tr key={addAD._id}>
                                                <td> {addAD.adminName} </td>
                                                <td> {addAD.adminRole} </td>
                                                <td>
                                                    <Button onClick={() => handelDelete(addAD._id)} variant="outline-danger" size="sm" >
                                                        <FontAwesomeIcon icon={faTrashCan} />  Remove
                                                    </Button>
                                                </td>
                                            </tr>

                                        )
                                    }
                                </tbody>
                            </Table>
                        </div>
                    </Col>

                    {/* make-admin  */}
                    <Col className="mx-auto" sm={12} md={7} >
                        <h4 className="custom-primary">Make Admin</h4>
                        <Form className="mt-3 p-3 border border-muted" onSubmit={handleSubmit(onSubmit)} >
                            <FloatingLabel className=" mb-2" controlId="floatingInput" label="Name" >
                                <Form.Control type="name" name="name" placeholder="name" {...register("name")} />
                            </FloatingLabel>
                            <FloatingLabel className="mb-2" controlId="floatingInput" label="Role" >
                                <Form.Control type="text" name="role" placeholder="role" {...register("role")} />
                            </FloatingLabel>
                            <FloatingLabel className="mb-2" controlId="floatingInput" label="Email" >
                                <Form.Control type="email" name="email" placeholder="email" {...register("email")} />
                            </FloatingLabel>
                            <div className="mt-3 text-center">
                                <Button variant="outline-info" type="submit" size="md">
                                    Make Admin
                                </Button>
                            </div>
                        </Form>
                    </Col>
                </Row>

            </main>
        </Container>
    );
};

export default MakeAdmin;