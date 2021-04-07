import React from "react";
import ReactTypingEffect from 'react-typing-effect'
import Aalok from '../assets/images/Aalok2.jpeg'
export default class NavbarComp extends React.Component{
    // constructor(props){
    //     super(props)
    // }
    // componentDidMount(){
    //     this.typeName()
    // }
    openNav(){
        document.getElementById("mySidenav").style.width="200px"
    }
    closeNav(){
        document.getElementById("mySidenav").style.width="0"
    }
    render(){
        return(
            <>
                <div className="sidenav" id="mySidenav">
                    <div className="d-flex flex-column pf">
                        <div className="profile">
                            <img src={Aalok} alt="" className="img-fluid rounded-circle"/>
                            <h1 onClick={this.closeNav} className="text-light"><a href="/">Aalok Kumar</a></h1>
                            <div className="links mt-3 text-center">
                                <a onClick={this.closeNav} href="mailto:aaloksah766626@gmail.com" className="google-plus"><i className="fa fa-envelope"></i></a>
                                <a onClick={this.closeNav} href="tel:9504496801" className="phone"><i className="fa fa-phone"></i></a>
                                <a onClick={this.closeNav} href="https://www.linkedin.com/in/aalok-kumar-9497211a2" className="linkedin"><i className="fa fa-linkedin"></i></a>
                                <a href="https://github.com/thecoderas" className="github"><i className="fa fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                    
                    <span className="closebtn" onClick={this.closeNav}>&times;</span>
                    <a onClick={this.closeNav} href="#about">About</a>
                    <a onClick={this.closeNav} href="#internship">Internships</a>
                    <a onClick={this.closeNav} href="#project">Projects</a>
                    <a onClick={this.closeNav} href="#skill">Skills</a>
                    <a onClick={this.closeNav} href="#certificate">Certificates</a>
                    <a onClick={this.closeNav} href="#contact">Other Activities</a>
                    
                </div>
                <div className="name">
                    <span className="openbtn" style={{fontSize:'30px',cursor:"pointer",color:'white'}} onClick={this.openNav}>&#9776;
                    </span>
                    <ReactTypingEffect typingDelay={1000} eraseDelay={1000} speed={100} eraseSpeed={100} text={["Aalok Kumar","Full Stack Web Developer","Software Developer"]} cursor="_" cursorRenderer={cursor=><h1>{cursor}</h1>} displayTextRenderer={(text,i)=>{
                            return(
                                <h1 style={{marginLeft:'35px',marginTop:'4px'}}>
                                    {text.split('').map((char,i)=>{
                                        const key=`${i}`
                                        return(
                                            <span key={key} >{char}</span>
                                        )
                                    })}
                                </h1>
                            )}
                        }
                        />

                 </div>
            </>
        )
    }
}