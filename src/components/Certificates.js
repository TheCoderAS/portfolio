import React from 'react';
import CertCarousel from './CertCarousel'

const Certificates = (props) => {
  return (
    <div className="about" id="certificates">
        <div className="details">   
            <div data-aos="fade-up" data-aos-offset="190" data-aos-easing="fade-up" data-aos-duration="600">
                <h1 style={{marginLeft:'10px'}}>Certificates</h1>
            </div> 
            <div className="line" data-aos="slide-right" data-aos-offset="193" data-aos-easing="fade-up" data-aos-duration="400">
            </div> 
            <div className="container skills"> 
                <div data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="fade-up" data-aos-duration="2000">
                    <CertCarousel/>
                </div> 
            </div>
        </div>      
    </div>
  );
}

export default Certificates;