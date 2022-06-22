import React from 'react';
import doctorInfo from '../../../DataTable/DoctorsInfo';
import DoctorCard from '../DoctorCard/DoctorCard';



const Doctors = () => {
    return (
        <section className="container mt-5 pt-5 " >
            <div className="text-center">
                <h6 style={{ fontWeight: '700' }} className="custom-primary"> OUR DOCTORS</h6>
            </div>
            <main className="mt-2 d-flex align-content-center justify-content-center ">
                <div className=" row ">
                    {
                        doctorInfo.map(doctor =>
                            <DoctorCard doctor={doctor}
                                key={doctor.name}
                            />
                        )
                    }
                </div>
            </main>
        </section>
    );
};

export default Doctors;