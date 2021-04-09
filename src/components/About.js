import React from "react";

export default class About extends React.Component{
    render(){
        return(
            <div className="about" id="about">
                <div className="details">   
                    <div data-aos="fade-up" data-aos-offset="500" data-aos-easing="fade-up" data-aos-duration="600">
                        <h1 style={{marginLeft:'10px'}}>About</h1>
                    </div> 
                    <div className="line" data-aos="slide-right" data-aos-offset="500" data-aos-easing="fade-up" data-aos-duration="400">
                        <blockquote style={{marginLeft:'10px'}} className="blockquote">
                            <p className="mb-0">Either I'll find a way or I'll make one.</p>
                            <footer className="blockquote-footer text-right mr-3"><cite title="Source Title">Aalok Kumar</cite></footer>
                        </blockquote>                    
                    </div> 
                    <div className="container">  
                        <div className="row">
                            <div className="text-left col-12">
                                <div data-aos="fade-down" data-aos-offset="500" data-aos-easing="ease-in" data-aos-duration="400">
                                    <h5 style={{color:'#f1f1f1'}}>I am</h5>
                                    <h1 id="role"><i>Full Stack Developer || Software Developer</i></h1>
                                </div>    
                            </div>
                        </div>
                        <div className="row">
                            <div className="text-left col-12 col-sm-6">
                                <div data-aos="fade-up" data-aos-offset="400" data-aos-easing="ease-in" data-aos-duration="400">
                                    <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16"><path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/></svg><strong>From:&nbsp;</strong><br></br><small>Vaishali, Bihar, 844118, India</small></li>
                                    <li className="list-group-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16"><path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/></svg><strong>Birthday:&nbsp;</strong><br></br><small>25-Nov-2001</small></li>
                                    <li className="list-group-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16"><path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/></svg><strong>Email:&nbsp;</strong><br></br><small><a href="mailto:aaloksah766626@gmail.com">aaloksah766626@gmail.com</a></small></li>
                                    </ul>
                                </div>    
                            </div>
                            <div className="text-left col-12 col-sm-6">
                                <div data-aos="fade-down" data-aos-offset="400" data-aos-easing="ease-in" data-aos-duration="400">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16"><path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/></svg><strong>Education:&nbsp;</strong>
                                    <br></br><small>Passed 10<sup>th</sup> from <b>Govt. High School, Muzaffarpur</b> with <b>87.4%</b> marks.</small>
                                    <br></br><small>Passed 12<sup>th</sup> from <b>Govt. High School, Muzaffarpur</b> with <b>89.8%</b> marks.</small>
                                    <br></br><small>Pursuing <b>B. Tech</b> in Electrical Engineering at <b>NIT Hamirpur</b> in the session 2019-2023.</small></li>
                                    </ul>
                                </div>    
                            </div>
                            <div className="text-left col-12">
                                <div data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in" data-aos-duration="400">
                                    <p id="objective">Having interest &amp; experience in Web development, I do participate in Competitive Coding on <a href="https://codeforces.com/profile/AalokKumar">Codeforces</a>. I also have interest in Artificial Intelligence.<br></br> Apart from these, I'm also a good motivator. I like to help others with whatever I can.</p>
                                </div>    
                            </div>
                        </div>
                    </div>
                </div>      
            </div>
        )
    }
}