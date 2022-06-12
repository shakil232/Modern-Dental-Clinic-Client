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
import FadeLoader from "react-spinners/FadeLoader";
import useAuth from '../../../hooks/useAuth';


const Home = () => {
  const { isLoading } = useAuth()

  return (

    isLoading ?
      <div className="d-flex align-content-center justify-content-center mt-5 p-5">
        < FadeLoader color={"#36D7B7"} loading={isLoading}
          width={8}
          height={18}
          radius={10}
          margin={10}
        />
      </div >
      :
      <div>
        <NavBar />
        <Header />
        <Services />
        <AboutUs />
        <MakeAppointment />
        <Testimonial />
        <Doctors />
        <Connected />
        <Footer />
      </div>

  );
};

export default Home;