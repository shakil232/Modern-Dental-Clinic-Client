import React from 'react';
import Services from '../Servicess/Services';
import AboutUs from '../AboutUs/AboutUs';
import Doctors from '../Doctors/Doctors';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Connected from '../Connected/Connected';
import Footer from '../../Shared/Footer/Footer'

const Home = () => {
    return (
        <>
          <Services/>  
          <AboutUs/>
          <MakeAppointment/>
          <Doctors/>
          <Connected/>
          <Footer/>
        </>
    );
};

export default Home;