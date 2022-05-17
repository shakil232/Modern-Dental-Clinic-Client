import React from 'react';
import BusinessCard from '../BusinessCard/BusinessCard'
import { faPhone, faClock, faLocationDot } from '@fortawesome/free-solid-svg-icons';



const businessInfo = [
    {
        title: 'Opening Hours',
        description: ' Lorem ipsum is simply ',
        icon : faClock,
        background: 'primary'
    },
    {
        title: 'Visit our location',
        description: 'Brooklyn, NY 10036,USA',
        icon : faLocationDot,
        background: 'dark'
    },
    {
        title: 'Contact us now',
        description: '+000 123 45524',
        icon : faPhone,
        background: 'primary'
    }
]

const BusinessInfo = () => {
    return (
        <section className="container">
            <main className=" d-flex justify-content-center ">
                <div className=" row ">
                    {
                        businessInfo.map(business =>
                            <BusinessCard business={business}></BusinessCard>
                        )
                    }
                </div>
            </main>
        </section>
    );
};

export default BusinessInfo;