import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, FloatingLabel, Form, Row, Button, Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from 'react-router-dom';
import swal from 'sweetalert';




const UpdateService = ({ restrictPermission }) => {
    const { serviceId } = useParams();
    const { register, handleSubmit } = useForm();
    const [update, setUpdate] = useState({});
    const navigate = useNavigate()


    // Load-Update-Service 
    useEffect(() => {
        const url = `https://enigmatic-harbor-19096.herokuapp.com/singleService/${serviceId}`
        axios.get(url)
            .then(res => setUpdate(res.data))
            .catch(err => swal("Failed!", "Please Try Again!", "error"))
    }, [serviceId])


    //  handelUpdate-Service 
    const onSubmit = data => {
        if (restrictPermission(serviceId)) {
            return swal("Permission restriction!", "As a test-admin, you don't have permission to Update 6 core services. But you can Update your added services.", "info");
        }

        const updateService = {
            'servicesName': data.name,
            'servicesCost': data.cost,
            'servicesTime': data.time,
            'servicesSpace': data.space
        }

        // UPDATE-SERVICE-POST-API
        const url = `https://enigmatic-harbor-19096.herokuapp.com/serviceUpdate/${serviceId}`
        axios.put(url, updateService)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    swal("Successfully UpDate!", "Your service has been successfully Updated", "success");
                    navigate('/dashboard/manageService')
                }
            })
            .catch(err => {
                swal("SomeThing wrong!", "Please Try Again!", "error");
            })

    };


    return (
        <Container className="custom-height mt-4 ">
            <main className=" bg-white p-5 rounded-3 shadow-lg">
                <h3 className="custom-primary"> Edit Service </h3>
                <Form className="mt-3 p-3 border border-muted" onSubmit={handleSubmit(onSubmit)} >
                    <Row className="g-3 p-3">

                        <Col sm={12} md={6} >
                            <FloatingLabel className="mb-2" controlId="floatingInput" label="Service Name" >
                                <Form.Control type="name" name="name" defaultValue={update.servicesName}
                                    {...register("name")} />
                            </FloatingLabel>

                            <FloatingLabel controlId="floatingInput" label="Cost" >
                                <Form.Control type="text" name="cost" defaultValue={update.servicesCost}
                                    {...register("cost")} />
                            </FloatingLabel>
                        </Col>

                        <Col sm={12} md={6}>
                            <FloatingLabel className="mb-2" controlId="floatingInput" label="Time" >
                                <Form.Control type="text" name="time" defaultValue={update.servicesTime}
                                    {...register("time")} />
                            </FloatingLabel>

                            <FloatingLabel controlId="floatingInput" label="Space" >
                                <Form.Control type="text" name="space" defaultValue={update.servicesSpace}
                                    {...register("space")} />
                            </FloatingLabel>
                        </Col>

                    </Row>

                    <div className="mt-4 text-center">
                        <Button variant="outline-info" type="submit" size="lg">
                            Updated
                        </Button>
                    </div>

                </Form>
            </main>

        </Container>
    );
};

export default UpdateService;