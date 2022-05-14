import React from 'react';
// images 
import Smith from '../../../images/doctor-1.png'
import Anderson from '../../../images/doctor-2.png'
import Morgan from '../../../images/doctor-3.png'
import DoctorCard from '../DoctorCard/DoctorCard';

const doctorInfo = [
    {
        image: Smith,
        name: 'Dr. Smith',
        phone: '+61 452 200'
    },
    {
        image: Anderson,
        name: 'Dr. Anderson',
        phone: '+61 452 200'
    },
    {
        image: Morgan,
        name: 'Dr. Morgan',
        phone: '+61 452 200'
    },
]

const Doctors = () => {
    return (
        <section className="container mt-5 pt-5">
            <div className="text-center">
                <h6 style={{ fontWeight: '700' }} className="custom-primary"> OUR DOCTORS</h6>
            </div>
            <main className="mt-2 d-flex align-content-center justify-content-center ">
                <div className=" row ">
                    {
                        doctorInfo.map(doctor =>
                            <DoctorCard doctor={doctor}></DoctorCard>
                        )
                    }
                </div>
            </main>
        </section>
    );
};

export default Doctors;