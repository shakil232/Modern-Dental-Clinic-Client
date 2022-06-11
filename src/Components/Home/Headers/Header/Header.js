import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import BusinessInfo from '../BusinessInfo/BusinessInfo';
import './Header.css'

const Header = () => {
    return (
        <div className=" header-bg header-container">
            
            <HeaderMain />
            <BusinessInfo />
        </div>
    );
};

export default Header;