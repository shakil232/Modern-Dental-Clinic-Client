import React from 'react';
import { faPhone, faClock, faLocationDot } from '@fortawesome/free-solid-svg-icons';



const businessInfo = [
    {
        title: 'Opening Hours',
        description: ' Lorem ipsum is simply dummy text of the pri ',
        icon : <FontAwesomeIcon icon={faClock} />,
        background: primary
    },
    {
        title: 'Visit our location',
        description: 'Brooklyn, NY 10036,USA',
        icon : <FontAwesomeIcon icon={faLocationDot} />,
        background: dark
    },
    {
        title: 'Contact us now',
        description: '+000 123 45524',
        icon : <FontAwesomeIcon icon={faPhone} />,
        background: primary
    }
]

const BusinessInfo = () => {
    return (
        <div>
            
        </div>
    );
};

export default BusinessInfo;