import React from 'react';

const Skills = (props) => {
  return (
    <div className="about" id="skill">
        <div className="details">   
            <div data-aos="fade-up" data-aos-offset="190" data-aos-easing="fade-up" data-aos-duration="600">
                <h1 style={{marginLeft:'10px'}}>Skills</h1>
            </div> 
            <div className="line" data-aos="slide-right" data-aos-offset="193" data-aos-easing="fade-up" data-aos-duration="400">
            </div> 
            <div className="container skills"> 
                <div className="row">
                    <div className="text-left col-12 col-sm-6">
                        <ul class="list-group list-group-flush">
                        <li data-aos="fade-up"data-aos-anchor-placement="top-bottom" data-aos-offset="250" data-aos-easing="ease-in" data-aos-duration="400" class="list-group-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16"><path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/></svg><strong>Web Dev:&nbsp;</strong>
                        <br></br><small>
                            <table class="table table-borderless">
                                <tbody>
                                    <tr data-aos="flip-left" data-aos-offset="240" data-aos-easing="ease-in" data-aos-duration="800" className="skill-text">
                                        <td>MongoDB</td>
                                        <td>Firebase</td>
                                        <td>JavaScript</td>
                                    </tr>
                                    <tr data-aos="flip-left" data-aos-offset="238" data-aos-easing="ease-in" data-aos-duration="800" className="skill-text">
                                        <td>React.js</td>
                                        <td>Express.js</td>
                                        <td>Node.js</td>
                                    </tr>
                                    <tr data-aos="flip-left" data-aos-offset="236" data-aos-easing="ease-in" data-aos-duration="800" className="skill-text">
                                        <td>HTML</td>
                                        <td>CSS</td>
                                        <td>Bootstrap</td>
                                    </tr>
                                </tbody>
                            </table>
                        </small></li>
                        </ul>
                    </div>
                    <div className="text-left col-12 col-sm-6">
                        <ul class="list-group list-group-flush">
                        <li data-aos="fade-up" data-aos-offset="250" data-aos-easing="ease-in" data-aos-duration="400" class="list-group-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16"><path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/></svg><strong>Programming:&nbsp;</strong>
                        <br></br><small>
                            <table class="table table-borderless">
                                <tbody>
                                    <tr data-aos="flip-right" data-aos-offset="240" data-aos-easing="ease-in" data-aos-duration="800" className="skill-text">
                                        <td>C++</td>
                                        <td>Python</td>
                                        <td>Matlab</td>
                                        <td>Ruby</td>
                                    </tr>
                                </tbody>
                            </table>
                        </small></li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="text-left col-12">
                        <ul class="list-group list-group-flush">
                        <li data-aos="fade-up" data-aos-offset="250" data-aos-easing="ease-in" data-aos-duration="400" class="list-group-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16"><path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/></svg><strong>Tools:&nbsp;</strong>
                        <br></br><small>
                            <table class="table table-sm table-borderless">
                                <tbody>
                                    <tr data-aos="flip-up" data-aos-offset="235" data-aos-easing="ease-in" data-aos-duration="1000" className="skill-text">
                                        <td>Data Structures &amp; Algorithms</td>
                                        <td>Linux</td>
                                        <td>Git</td>
                                        <td>Photoshop</td>
                                    </tr>
                                </tbody>
                            </table>
                        </small></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>      
    </div>
  );
}

export default Skills;