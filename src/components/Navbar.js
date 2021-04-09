import React from "react";
import ReactTypingEffect from 'react-typing-effect'
import Aalok from '../assets/images/Aalok2.jpeg'
import firebase from '../config/config'
import $ from 'jquery'
import {NavLink} from 'react-router-dom'
export default class NavbarComp extends React.Component{
	constructor(props){
        super(props)
        this.state={
            email:'',
        }
        this.createUser=this.createUser.bind(this)
        this.getUser=this.getUser.bind(this)
        this.cancelUser=this.cancelUser.bind(this)
        this.handleChange=this.handleChange.bind(this)
    }
    componentDidMount(){
        $("#createbtn").collapse('show')
        $("#getbtn").collapse('show')
        $("#create").modal('hide')
    }
    handleChange(e){
        this.setState({[e.target.name]:e.target.value})
    }    
    
    openNav(){
        document.getElementById("mySidenav").style.width="200px"
    }
    closeNav(){
        document.getElementById("mySidenav").style.width="0"
    }
    database=firebase.database()
    createUser(e){
        e.preventDefault()
        if(window.confirm('Creating will delete all of your existing data with this email if you have any.\nDo you want to continue.')){
            $("#createbtn").collapse('hide')
            $("#loader").collapse('show')
            
            let email=this.state.email
            if(email!==''){
                var user=email.split('@')
                this.database.ref('/users/'+user[0]).set({Email:email}).then(()=>{
                    //console.log("Created")
                    $("#create").modal("toggle")
                    $("#createbtn").collapse('show')
                    $("#loader").collapse('hide')
                })
            }
        }
    }
    cancelUser(e){
        e.preventDefault()
        let email=this.state.email
        if(email!==''){
            //console.log(email)
            this.database.ref('/users/cancelled/').set({Email:email})
        }
    }
    getUser(e){
        e.preventDefault()
        $("#getbtn").collapse('hide')
        $("#getloader").collapse('show')
        let email=this.state.email
        var user=email.split('@')
        this.database.ref('/users/'+user[0]).get().then((snap)=>{
            //console.log("Created")
            $("#create").modal("toggle")
            $("#getbtn").collapse('show')
            $("#getloader").collapse('hide')
            console.log(snap.val())
        })
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
                    <span data-toggle="modal" data-target="#create" className="createbtn fa fa-plus"></span>
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
                <div className="create">
                    <div className="modal fade" id="create" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Create Portfolio</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <form onSubmit={this.createUser}>
										<div className="row input">
											<div className="col-12">
												<label htmlFor="email">Email<sup>*</sup></label>
												<input type="email" placeholder="" id="email" name="email" value={this.state.email} onChange={this.handleChange} required/>
											</div>
										</div>
										<div className="row input">
                                        <div className="col-4">
                                                <button type="button" className="btn outline btn-block btn-danger" data-dismiss="modal" data-toggle="tooltip" data-placement="top" title="By cancelling you will not be registered."onClick={this.cancelUser}>Cancel</button>
                                            </div>
                                            <div className="col-4">
                                                <div className="collapse" id="getloader">
                                                    <div className="d-flex justify-content-center">
                                                        <div className="spinner-border" role="status">
                                                    </div>
                                                    </div>
                                                </div>
                                                <div className="collapse" id="getbtn">
                                                    <NavLink to='/'><button type="submit" className="btn outline btn-block btn-success send" onClick={this.getUser}>Go</button></NavLink>
                                                </div>
                                            </div>
											<div className="col-4">
                                                <div className="collapse" id="loader">
                                                    <div className="d-flex justify-content-center">
                                                        <div className="spinner-border" role="status">
                                                            <span className="sr-only">Loading...</span>
                                                    </div>
                                                    </div>
                                                </div>
                                                <div className="collapse" id="createbtn">
                                                    <NavLink to='/create/'><button type="submit" className="btn outline btn-block btn-primary send" data-toggle="tooltip" data-placement="top" title="Creating will delete all of your exixting data with this email if you have any." onClick={this.createUser}>Create</button></NavLink>
                                                </div>
											</div>
										</div>
									</form>
                                </div>
                            </div>
                        </div>
                    </div>                
                </div>
            </>
        )
    }
}