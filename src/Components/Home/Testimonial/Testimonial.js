import React from 'react';
import Wilson from '../../../images/Wilson Harry.png'
import TestimonialCard from '../TestimonialCard/TestimonialCard';

const testimonialInfo = [
    {
        comments: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae explicabo consectetur ut aut. Quasi odio quia suscipit esse ducimus id et, exercitationem perferendis sequi dolore. ',
        name: ' Wilson Herry',
        address: 'california',
        image: Wilson
    },
    {
        comments: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae explicabo consectetur ut aut. Quasi odio quia suscipit esse ducimus id et, exercitationem perferendis sequi dolore. ',
        name: ' Wilson Herry',
        address: 'california',
        image: Wilson
    },
    {
        comments: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae explicabo consectetur ut aut. Quasi odio quia suscipit esse ducimus id et, exercitationem perferendis sequi dolore.',
        name: ' Wilson Herry',
        address: 'california',
        image: Wilson
    }
]
const Testimonial = () => {
    return (
        <section className="container mt-5 pt-5">
            <div className="testimonial-bg">
                <h6 style={{ fontWeight: '700' }} className="custom-primary"> TESTIMONIAL</h6>
                <h2 className="custom-dark mt-2">What's Our Patients <br /> Says </h2>
            </div>
            <main className="mt-5 d-flex align-content-center justify-content-center ">
                <div className=" row ">
                    {
                        testimonialInfo.map(testimonial =>
                            <TestimonialCard testimonial={testimonial}></TestimonialCard>
                        )
                    }
                </div>
            </main>
        </section>
    );
};

export default Testimonial;