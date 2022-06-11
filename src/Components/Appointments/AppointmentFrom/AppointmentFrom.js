import React, { useState } from 'react';
import './AppointmentFrom.css'
import { useForm } from "react-hook-form";
import { Button, Modal } from 'react-bootstrap';




const AppointmentFrom = ({ booking, date, lgShow, setLgShow }) => {

    const { register, handleSubmit} = useForm();
    const [ bookingInfo, setBookingInfo ] = useState({
        // displayName: user.displayName,
        // email: user.email,
        // phone: ''
    });


    // from-submit 
    const onSubmit = data =>{
        const presentInfo = {
            name: data.name,
            email: data.email,
            phone: data.phone,
            price: booking.price,
            date: data,
            time: booking.time,
            action: 'pending'
        }
        console.log('presentInfo', presentInfo)
    };

    return (
        <>
            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
            >
                <Modal.Header closeButton>
                    <Modal.Title className="custom-primary">
                        {booking.name}
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div >
                            <input className="form-control" name="time" defaultValue={booking.time}  {...register("time")}  disabled  />
                        </div>
                        <div>
                            <input className="form-control mt-2" type="text" name="name" placeholder="Your name" {...register("name")} />
                        </div>
                        <div>
                            <input className="form-control mt-2" type="email" name="email" placeholder="Your email"  {...register("email")} />
                        </div>
                        <div>
                            <input className="form-control mt-2" type="text" name="phone" placeholder="Phone Number"  {...register("phone")} />
                        </div>
                        <div>
                            <input className="form-control mt-2" type="text" name="price" defaultValue={booking.price} {...register("price")} disabled />
                        </div>
                        <div>
                            <input className="form-control mt-2" name="date" defaultValue={date.toDateString()} {...register("date")} disabled />
                        </div>
                        <div className="form-group mt-4">
                            <Button type="submit" className=" btn-main border-0 rounded-3 form-control" >Submit</Button>
                        </div>

                    </form>

                </Modal.Body>
            </Modal>
        </>
    );
};

export default AppointmentFrom;