import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './BusinessCard.css'


const BusinessCard = ({ business }) => {
    const { title, icon, background, description } = business;

    return (
        <div className="col-md-4 g-2">
            <div className={` m-auto d-flex business-container justify-content-center align-content-center info-${background}`}>
                <div>
                    <FontAwesomeIcon className="text-white fs-2" icon={icon} />
                </div>
                <div className="text-white ms-3">
                    <h6>{title}</h6>
                    <small>{description}</small>
                </div>
            </div>
        </div>
    );
};

export default BusinessCard;