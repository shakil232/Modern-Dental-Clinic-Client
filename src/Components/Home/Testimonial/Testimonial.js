import React from 'react';
import TestimonialCard from '../TestimonialCard/TestimonialCard';
import testimonialInfo from '../../../DataTable/TestimonialsInfo';
// swiper
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'
import 'swiper/swiper.min.css';
import 'swiper/modules/navigation/navigation.min.css';
import 'swiper/modules/pagination/pagination.min.css';
import './Testimonial.css'
// import Swiper core and required modules
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
// install Swiper modules
SwiperCore.use([Autoplay, Navigation, Pagination]);




const Testimonial = () => {

    return (
        <section className="container testimonials mt-5 pt-5">
            <div className="testimonial-bg">
                <h6 style={{ fontWeight: '700' }} className="custom-primary"> TESTIMONIAL</h6>
                <h2 className="custom-dark mt-2">What's Our Patients <br /> Says </h2>
            </div>
            <main className="mt-5 d-flex align-content-center justify-content-center">
                {/* Swiper-Slider-Start */}
                <Swiper
                    className="mySwiper mb-5"
                    slidesPerView={1}
                    spaceBetween={1}
                    loop={true}
                    centeredSlides={true}
                    navigation={true}
                    autoplay={{
                        "delay": 3500,
                        "disableOnInteraction": false
                    }}
                    breakpoints={{
                        "640": {
                            "slidesPerView": 1,
                            "spaceBetween": 20
                        },
                        "768": {
                            "slidesPerView": 2,
                            "spaceBetween": 20
                        },
                        "1024": {
                            "slidesPerView": 3,
                            "spaceBetween": 20
                        }
                    }} >

                    {
                        testimonialInfo.map((testimonial) => (
                            <SwiperSlide>
                                <TestimonialCard testimonial={testimonial} 
                                key={testimonial.id}
                                />
                            </SwiperSlide>
                        ))
                    }

                </Swiper>
            </main>
        </section>
    );
};

export default Testimonial;