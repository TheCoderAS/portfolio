import React from "react";
import NavbarComp from './Navbar'

export default class Dash extends React.Component{
    render(){
        return(
            <>
                <div className="container-fluid">
                    <div className="background">
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
                        <h1>Welcome</h1>
                        <p>I am a Full Stack Web Developer</p><p>I'm also a software developer.</p>
                    </section>
                </header> 
                </div>           
            </>  
        )
    }
}