import React from 'react';
import ServicesCard from '../ServicesCard/ServicesCard';
import { Link } from 'react-router-dom';
import serviceInfo from '../../../DataTable/ServicesInfo';



const Services = () => {
    return (
        <section className="container mt-5 pt-5">
            <div className="text-center">
                <h6 style={{ fontWeight: '700' }} className="custom-primary"> OUR SERVICES</h6>
                <h2 className="custom-dark mt-2">Services We Provide</h2>
            </div>
            <main className="mt-2 d-flex align-content-center justify-content-center ">
                <div className=" row ">
                    {
                        serviceInfo.map(service =>
                            <ServicesCard service={service}
                                key={service.name}
                            />)
                    }
                </div>
            </main>
            <div className="text-center mt-4">
                <Link to="/appointment" className=" btn btn-main border-0 rounded-3 mb-2"> Explore More </Link>
            </div>

        </section>
    );
};

export default Services;