import React from "react";
import ReactTypingEffect from 'react-typing-effect'
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
                    <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav}>&times;</a>
                    <a href="#">About</a>
                    <a href="#">Education</a>
                    <a href="#">Internships</a>
                    <a href="#">Projects</a>
                    <a href="#">Skills</a>
                    <a href="#">Other Activities</a>
                    <a href="#">Contact</a>
                    
                </div>
                <div className="name">
                    <span style={{fontSize:'30px',cursor:"pointer",color:'white'}} onClick={this.openNav}>&#9776;
                        <ReactTypingEffect typingDelay={1000} eraseDelay={1000} speed={100} eraseSpeed={100} text={["Aalok Kumar"]} cursor="_" cursorRenderer={cursor=><h1>{cursor}</h1>} displayTextRenderer={(text,i)=>{
                            return(
                                <h1>
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
                    </span>
                 </div>
            </>
        )
    }
}