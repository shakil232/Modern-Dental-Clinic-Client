import React, { useRef } from 'react';
import { Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import swal from 'sweetalert';


const Connected = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_az16bjh', 'template_0ah5245', form.current, 'user_tbFNuorI3og0UJCyvUeAH')
            .then(res => {
                swal({
                    title: "Your Message Send Successfully",
                    text: "Thank You",
                    icon: "success",
                    button: "ok",
                });
               
            },
                (error) => {
                    swal({
                        title: `${error.text}`,
                        text: "Sorry! Try Again",
                        icon: "error",
                        button: "ok",
                    });
                });

        e.target.reset()
    };

    return (
        <section className="home-bg mt-5 pt-5">

            <Container>
                <div className="text-center">
                    <h6 style={{ fontWeight: '500' }} className="custom-primary"> CONNECT US</h6>
                    <h2 className="text-white mt-1">Always Connect with us</h2>
                </div>

                <Form className="mt-3 p-3" ref={form} onSubmit={sendEmail} >
                    <Row className="g-3 ">
                        <Col className="mx-auto" sm={12} md={6} >

                            <FloatingLabel className=" mb-2" controlId="floatingInput" label="Your name" >
                                <Form.Control type="text" name="user_name" placeholder="Your name" required />
                            </FloatingLabel>

                            <FloatingLabel className=" mb-2" controlId="floatingInput" label="Email address" >
                                <Form.Control type="email" name="user_email" placeholder="Email address" required />
                            </FloatingLabel>

                            <FloatingLabel className=" mb-2" controlId="floatingInput" label="Subject" >
                                <Form.Control type="text" name="subject" placeholder="Subject" required />
                            </FloatingLabel>

                            <FloatingLabel className="mb-2" controlId="floatingTextarea2" label="Message">
                                <Form.Control type="text" name="message" as="textarea" placeholder="Message" style={{ height: '100px' }} required />
                            </FloatingLabel>

                            <Button className='form-control my-3 btn-main border-0 rounded-3' type="submit" >
                                Send
                            </Button>
                        </Col>
                    </Row>


                </Form>



            </Container>
        </section>
    );
};

export default Connected;