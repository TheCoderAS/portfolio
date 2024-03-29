import React from "react";
import NavbarComp from './Navbar'
import About from './About'
import Internships from './Internships'
import Projects from './Projects'
import Skills from './Skills'
import Certificates from './Certificates'
import Contact from "./Contact";

export default class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <NavbarComp />
                <div className="logo"><span>AS</span></div>
                <section className="header-content">
                    <div data-aos="fade-down" data-aos-offset="200" data-aos-duration="1500">
                        <h1>Welcome</h1>
                    </div>
                    <div data-aos="fade-up" data-aos-offset="200" data-aos-duration="1500">
                        <p>Hey there! I'm <strong>Aalok Kumar</strong></p><p>A <strong>Full Stack Developer</strong> and <strong>Software Developer.</strong> {/*and <strong>Computer Vision enthusiast</strong>*/}</p>
                    </div>
                </section>
                <About />
                <Internships />
                <Projects />
                <Skills />
                <Certificates />
                <Contact />
            </header>

        )
    }
}