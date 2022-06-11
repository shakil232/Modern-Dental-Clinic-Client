import React from 'react';
import Services from '../Servicess/Services';
import AboutUs from '../AboutUs/AboutUs';
import Doctors from '../Doctors/Doctors';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Testimonial from '../Testimonial/Testimonial';
import Connected from '../Connected/Connected';
import Footer from '../../Shared/Footer/Footer'
import Header from '../Headers/Header/Header';
import NavBar from '../../Shared/NavBar/NabBar';

const Home = () => {
  return (
    <div className="py-1">
    <NavBar />
      <Header />
      <Services />
      <AboutUs />
      <MakeAppointment />
      <Testimonial/>
      <Doctors />
      <Connected />
      <Footer />
    </div>
  );
};

export default Home;