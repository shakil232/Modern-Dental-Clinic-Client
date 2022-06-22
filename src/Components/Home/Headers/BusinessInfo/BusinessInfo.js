import React from 'react';
import businessInfo from '../../../../DataTable/BusinessInfo';
import BusinessCard from '../BusinessCard/BusinessCard'



const BusinessInfo = () => {
    return (
        <section className="container">
            <main className=" d-flex justify-content-center ">
                <div className=" row ">
                    {
                        businessInfo.map(business =>
                            <BusinessCard business={business}
                                key={business.title}
                            />
                        )
                    }
                </div>
            </main>
        </section>
    );
};

export default BusinessInfo;