import React from 'react';
import { FloatingLabel, Form, Button, Row, Col } from 'react-bootstrap';
import { useForm } from "react-hook-form";


const MakeAdmin = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        const adminInfo = {
            adminName: data.name,
            adminRole: data.role,
            adminEmail: data.email,
        }
        console.log(adminInfo)

    };

    return (
        <section className="container custom-height mt-4 ">
            <main className=" bg-white p-5  rounded-3 shadow-lg">
                <h2 className="custom-primary">Make Admin</h2>

                <Form className="mt-3 p-3 border border-info" onSubmit={handleSubmit(onSubmit)} >
                    <Row className="g-3 p-3">
                        <Col className="mx-auto" sm={12} md={6} >
                         
                            <FloatingLabel className=" mb-2" controlId="floatingInput" label="Name" >
                                <Form.Control type="name" name="name" placeholder="name" {...register("name")} />
                            </FloatingLabel>
                            <FloatingLabel className="mb-2" controlId="floatingInput" label="Role" >
                                <Form.Control type="text" name="role" placeholder="role" {...register("role")} />
                            </FloatingLabel>
                            <FloatingLabel className="mb-2" controlId="floatingInput" label="Email" >
                                <Form.Control type="email" name="email" placeholder="email" {...register("email")} />
                            </FloatingLabel>

                        </Col>
                    </Row>

                    <div className="mt-3 text-center">
                        <Button variant="outline-info" type="submit" size="lg">
                            Make Admin
                        </Button>
                    </div>

                </Form>
            </main>
        </section>
    );
};

export default MakeAdmin;