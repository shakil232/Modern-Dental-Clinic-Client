import React, { useEffect, useState } from 'react';
import NavBar from '../../Shared/NavBar/NabBar';
import MoonLoader from "react-spinners/MoonLoader";
import useAuth from '../../../hooks/useAuth';
import axios from 'axios';
import BookingReviewCard from '../BookingReviewCard/BookingReviewCard';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';


const BookingReview = () => {
    const { isLoading, user: { email } } = useAuth();
    const [bookingReview, setBookingReview] = useState([]);
    const navigate = useNavigate()



    useEffect(() => {
        const url = `https://enigmatic-harbor-19096.herokuapp.com/appointmentByEmail?email=${email}`
        axios.get(url, {
            headers: {
                'authorization': `Bearer ${localStorage.getItem('idToken')}`
            }
        })
            .then(res => {
                if (res.status === 200) {
                    setBookingReview(res.data)
                }
                else if (res.status === 401) {
                    navigate("/")
                }
            })
            .catch(err => swal("Failed!", "Please Try Again!", "error"))

    }, [email, navigate]);

    //  cancel-appointment 
    const handelCancelAppointment = cancelId => {

        swal({
            title: "Are you sure?",
            text: "Are you sure you want to Cancel this Appointment?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willCancel) => {
                if (willCancel) {
                    const url = `https://enigmatic-harbor-19096.herokuapp.com/appointmentCancel/${cancelId}`
                    axios.delete(url)
                        .then(res => {
                            if (res.data.deletedCount > 0) {
                                swal("Successfully Canceled !", "Your Appointment has been successfully Canceled.", {
                                    icon: "success",
                                });

                                const remainingAppointment = bookingReview.filter(booking => booking._id !== cancelId);
                                setBookingReview(remainingAppointment)
                            }
                        });
                }
                else {
                    swal("Your Booking Appointment is safe!");
                }

            });
    };



    return (
        isLoading ?
            <div className="d-flex align-content-center justify-content-center p-5">
                <MoonLoader color={"#36D7B7"} loading={isLoading}
                    size={60}
                />
            </div>
            :
            <section >
                <NavBar />
                <main className="container mt-5">
                    <div className="checkout-header-underline mb-3">
                        <h3 className="custom-primary">Checkout</h3>
                    </div>

                    {
                        bookingReview.map(review =>
                            <BookingReviewCard
                                handelCancelAppointment={handelCancelAppointment}
                                review={review}
                                key={review._id}
                            />
                        )
                    }

                </main>
            </section >

    );
};

export default BookingReview;