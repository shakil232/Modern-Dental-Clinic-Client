import React, { useState } from 'react';
import './AppointmentFrom.css'
import { useForm } from "react-hook-form";
import { Modal } from 'react-bootstrap';




const AppointmentFrom = ({ booking, date, lgShow, setLgShow }) => {

    const { register, handleSubmit} = useForm();
    const [ bookingInfo, setBookingInfo ] = useState();


    // from-submit 
    const onSubmit = data =>{
        console.log(data)
    };

    return (
        <div>
            <Modal
                size="sm"
                show={smShow}
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
                            <input className="form-control" name="time" defaultValue={booking.time}  {...register("time"})}  disabled  />
                        </div>
                        <div>
                            <input className="form-control mt-2" type="text" name="name"  {...register("name")} />
                        </div>
                        <div>
                            <input className="form-control mt-2" type="email" name="email"  {...register("email")} />
                        </div>
                        <div>
                            <input className="form-control mt-2" type="text" name="phone" {...register("phone")} />
                        </div>
                        <div>
                            <input className="form-control mt-2" type="text" name="price" defaultValue={booking.price} {...register("price")} disabled />
                        </div>
                        <div>
                            <input className="form-control mt-2" name="date" defaultValue={date.toDateString()} {...register("date")} disabled />
                        </div>
                        <div className="form-group mt-4">
                            <input className="btn btn-info form-control" type="submit" value="Submit" />
                        </div>

                    </form>

                </Modal.Body>
            </Modal>
        </div>
    );
};

export default AppointmentFrom;