import React from 'react';
import NavBar from '../../../Shared/NavBar/NabBar';
import HeaderMain from '../HeaderMain/HeaderMain';
import BusinessInfo from '../BusinessInfo/BusinessInfo';
import './Header.css'

const Header = () => {
    return (
        <div className=" header-bg header-container">
            <NavBar />
            <HeaderMain />
            <BusinessInfo />
        </div>
    );
};

export default Header;