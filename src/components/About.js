import React from "react";

export default class About extends React.Component{
    render(){
        return(
            <div className="about">
                <div className="details">   
                    <div data-aos="fade-up" data-aos-offset="500" data-aos-easing="fade-up" data-aos-duration="600">
                        <h1>About</h1>
                    </div> 
                    <div className="line" data-aos="slide-right" data-aos-offset="500" data-aos-easing="fade-up" data-aos-duration="400">
                    </div> 
                    <div className="container">  
                        <div className="row">
                        <div className="text-left col-12 col-sm-6">
                                <div data-aos="fade-down" data-aos-offset="500" data-aos-easing="ease-in" data-aos-duration="400">
                                    <p>What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever</p>
                                </div>    
                            </div>
                            <div className="text-right col-12 col-sm-6">
                                <div data-aos="fade-up" data-aos-offset="500" data-aos-easing="ease-in" data-aos-duration="400">
                                    <p>What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever</p>
                                </div>    
                            </div>
                        </div>
                    </div>
                </div>      
            </div>
        )
    }
}