import React from 'react';
import { Col, FloatingLabel, Form, Row, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';


const UpdateService = () => {
    const {serviceId} = useParams();
    console.log(serviceId)

    const { register,handleSubmit } = useForm();

    const onSubmit = data => {
        const servicesUpdate = {
            servicesName: data.name,
            servicesPrice: data.price,
            servicesTime: data.time,
            servicesSpace: data.space
        }
        console.log(servicesUpdate)

    };

    return (
        <section className="container custom-height mt-4 ">
            <main className=" bg-white p-5 rounded-3 shadow-lg">
                <h3 className="custom-primary"> Edit Service </h3>
                <Form className="mt-3 p-3 border border-muted" onSubmit={handleSubmit(onSubmit)} >
                    <Row className="g-3 p-3">
                        <h4 className="text-info">{serviceId}</h4>
                        <Col sm={12} md={6} >
                            <FloatingLabel className="mb-2" controlId="floatingInput" label="Service Name" >
                                <Form.Control type="name" name="name" placeholder="name"
                                    {...register("name")} />
                            </FloatingLabel>

                            <FloatingLabel controlId="floatingInput" label="Price" >
                                <Form.Control type="text" name="price" placeholder="price"
                                    {...register("price")} />
                            </FloatingLabel>
                        </Col>

                        <Col sm={12} md={6}>
                            <FloatingLabel className="mb-2" controlId="floatingInput" label="Time" >
                                <Form.Control type="text" name="time" placeholder="time"
                                    {...register("time")} />
                            </FloatingLabel>

                            <FloatingLabel controlId="floatingInput" label="Space" >
                                <Form.Control type="text" name="space" placeholder="space"
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

        </section>
    );
};

export default UpdateService;