import React from 'react';
import * as emailjs from 'emailjs-com'

class Contact extends React.Component{
	constructor(props){
        super(props)
        this.state={
            name:'',
            email:'',
            message:''
        }
        this.submitContact=this.submitContact.bind(this)
        this.handleChange=this.handleChange.bind(this)
    }
    handleChange(e){
        this.setState({[e.target.name]:e.target.value})
    }    
    submitContact(e){
        e.preventDefault()
        let name=this.state.name
        let from_email=this.state.email
        let message=this.state.message
        let TemplateParams={
            from_name:name,
            reply_to:from_email,
            from_email:from_email,
            subject:'New message from '+name,
            message:message
        }
        emailjs.send('aaloksport','template_ti1grog',TemplateParams,'user_Hk40V6MAtnhv5GSO1Xuh4').then((result)=>{
            alert("Email sent successfully!")
        }).catch((err)=>{

        }).finally(()=>{
            this.setState({name:'',email:'',message:''})
        })
    }

	render(){
		return (
			<div className="about" id="contact">
				<div className="details">   
					<div data-aos="fade-up" data-aos-offset="190" data-aos-easing="fade-up" data-aos-duration="600">
						<h1 style={{marginLeft:'10px'}}>Contact</h1>
					</div> 
					<div className="line" data-aos="slide-right" data-aos-offset="193" data-aos-easing="fade-up" data-aos-duration="400">
					</div> 
					<div className="container skills contact"> 
						<div className="row">
							<div className="col-10" data-aos="fade-up" data-aos-offset="200" data-aos-easing="fade-down-right" data-aos-duration="600">
								<div className="shadow p-3 contact-body">
									<form onSubmit={this.submitContact}>
										<div className="row input">
											<div className="col-12">
												<label htmlFor="name">Name<sup>*</sup></label>
												<input type="text" placeholder=" " id="name" name="name" value={this.state.name} onChange={this.handleChange} required/>
											</div>
										</div>
										<div className="row input">
											<div className="col-12">
												<label htmlFor="email">Email<sup>*</sup></label>
												<input type="email" placeholder="" id="email" name="email" value={this.state.email} onChange={this.handleChange} required/>
											</div>
										</div>
										<div className="row input">
											<div className="col-12">
												<label htmlFor="message">Message<sup>*</sup></label>
												<textarea name="message" placeholder="" id="message" value={this.state.message} onChange={this.handleChange} required></textarea>
											</div>
										</div>
										<div className="row input">
											<div className="col-12">
												<button type="submit" className="btn btn-block btn-primary send">Send</button>
											</div>
										</div>
									</form>
								</div>
							</div>
							<div className="d-flex flex-row-reverse col-2 text-right">
								<div className="row">
									<div className="col-12" data-aos="fade-down-right" data-aos-offset="200" data-aos-easing="fade-up" data-aos-duration="600">
										<div className="links mt-3 text-center">
											<a href="mailto:aaloksah766626@gmail.com" className="google-plus"><i className="fa fa-envelope"></i></a>
										</div>
									</div>
									<div className="col-12" data-aos="fade-down-right" data-aos-offset="200" data-aos-easing="fade-up" data-aos-duration="600">
										<div className="links mt-3 text-center">
											<a href="tel:+91 9504496801" className="phone"><i className="fa fa-phone"></i></a>
										</div>
									</div>
									<div className="col-12" data-aos="fade-right" data-aos-offset="200" data-aos-easing="fade-up" data-aos-duration="600">
										<div className="links mt-3 text-center">
											<a href="https://www.linkedin.com/in/aalok-kumar-9497211a2" className="linkedin"><i className="fa fa-linkedin"></i></a>
										</div>
									</div>
									<div className="col-12" data-aos="fade-up-right" data-aos-offset="180" data-aos-easing="fade-up" data-aos-duration="600">
										<div className="links mt-3 text-center">
											<a href="https://github.com/thecoderas" className="github"><i className="fa fa-github"></i></a>
										</div>
									</div>
									<div className="col-12" data-aos="fade-up-right" data-aos-offset="100" data-aos-easing="fade-up" data-aos-duration="600">
										<div className="links mt-3 text-center">
											<a href="https://codeforces.com/profile/AalokKumar" className="google-plus"><i className="fa fa-code"></i></a>
										</div>
									</div>
								</div>
							</div>
						</div> 
					</div>
				</div>  
			</div>
		);
	}
}

export default Contact;