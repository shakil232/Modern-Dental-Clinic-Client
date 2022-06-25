import axios from 'axios';
import React from 'react';
import { Col, FloatingLabel, Form, Row, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import swal from 'sweetalert';



const AddService = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        const servicesInfo = {
            'servicesName': data.name,
            'servicesCost': data.cost,
            'servicesTime': data.time,
            'servicesSpace': data.space
        }

        // post-Api
        const url = `https://enigmatic-harbor-19096.herokuapp.com/addServices`
        axios.post(url,servicesInfo)
        .then(res =>{
            if(res.data.insertedId){
               swal({
                    title: "Successfully Uploaded",
                    text: "Your new service has been successfully added.",
                    icon: "success",
                    button: "ok",
                });
              reset()
            }
        })
        .catch(err => {
            swal("Failed!", "Please Try Again!", "error");
        })
    };


    return (
        <section className="container custom-height mt-4 ">
            <main className=" bg-white p-5 rounded-3 shadow-lg">
                <h3 className="custom-primary">Add Services </h3>
                <Form className="mt-3 p-3 border border-muted" onSubmit={handleSubmit(onSubmit)} >
                    <Row className="g-3 p-3">

                        <Col sm={12} md={6} >
                            <FloatingLabel className="mb-2" controlId="floatingInput" label="Service Name" >
                                <Form.Control type="name" name="name" placeholder="name"
                                    {...register("name")} />
                            </FloatingLabel>

                            <FloatingLabel controlId="floatingInput" label="Cost" >
                                <Form.Control type="text" name="cost" placeholder="cost"
                                    {...register("cost")} />
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
                            Add Service
                        </Button>
                    </div>

                </Form>
            </main>

        </section>
    );
};

export default AddService;