import React from "react";
import NavbarComp from './Navbar'
import About from './About'
import Internships from './Internships'
import Projects from './Projects'
import Skills from './Skills'
import Certificates from './Certificates'
import Contact from "./Contact";

export default class Dash extends React.Component{
    render(){
        return(
            <>
                <div className="container-fluid" id="dash">
                    <div className="background">
                    <div className="cube"></div>
                    <div className="cube"></div>
                    <div className="cube"></div>
                    <div className="cube"></div>
                    <div className="cube"></div>
                    <div className="cube"></div>
                    <div className="cube"></div>
                    <div className="cube"></div>
                    <div className="cube"></div>
                    <div className="cube"></div>
                    <div className="cube"></div>
                    <div className="cube"></div>
                    <div className="cube"></div>
                    <div className="cube"></div>
                    <div className="cube"></div>
                    <div className="cube"></div>
                    <div className="cube"></div>
                    <div className="cube"></div>
                    <div className="cube"></div>
                    <div className="cube"></div>
                    <div className="cube"></div>
                    <div className="cube"></div>
                    <div className="cube"></div>
                    <div className="cube"></div>
                    <div className="cube"></div>
                    </div>
                    <header>
                        <NavbarComp/>
                        <div className="logo"><span>AS</span></div>
                        <section className="header-content">
                            <div data-aos="fade-down" data-aos-offset="200" data-aos-duration="1500">
                                <h1>Welcome</h1>
                            </div>
                            <div data-aos="fade-up" data-aos-offset="200" data-aos-duration="1500">
                                <p>Hey there! I'm <strong>Aalok Kumar</strong></p><p>A <strong>Full Stack web Developer</strong>, <strong>Software Developer</strong> and <strong>Computer Vision enthusiast</strong></p>
                            </div>
                        </section>
                        <About/> 
                        <Internships/>
                        <Projects/>
                        <Skills/>
                        <Certificates/>
                        <Contact/>
                    </header>
                    <footer id="footer">
                                <h7 className="copyright">&#169;&nbsp;2021 Aalok Kumar</h7>
	                </footer>
                </div>           
            </>  
        )
    }
}


