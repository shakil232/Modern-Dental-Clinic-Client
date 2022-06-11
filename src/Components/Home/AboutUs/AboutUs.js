import React from 'react';
import { Button } from 'react-bootstrap';
import About from '../../../images/AboutUs.png'

const AboutUs = () => {
    return (
       <section className="container mt-5 pt-5">
           <div className="row g-4">
               <div className="col-md-4 offset-md-1">
                   <img className="img-fluid " src={About} alt="aboutUs"/>
               </div>
               <div className="col-md-6 m-auto">
                   <h2 className="custom-dark"> Exceptional Dental 
                       <br/>
                      Care, on Your Terms
                   </h2>
                   <p className="mt-4 text-muted text-justify">
                       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi libero non sapiente odio fugit alias inventore quisquam dolorum assumenda explicabo adipisci vero, deserunt a in incidunt. Ex officiis necessitatibus aliquid ducimus libero velit illum ab voluptas aut vero! Rem, reprehenderit culpa, ducimus molestias nemo tempore ea unde praesentium vel quibusdam voluptate, obcaecati accusamus assumenda. Dolores temporibus natus deserunt ea sit.
                   </p>
                  
                   <Button className="btn-main border-0 rounded-3 mb-2">Learn More</Button>
               </div>
           </div>
       </section>
    );
};

export default AboutUs;