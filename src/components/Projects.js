import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames'

import MYINFO from '../assets/images/myinfo.jpg'
import AttdSys from '../assets/images/attdsys.jpg'
import myinfo from '../assets/images/my-info.jpg'
import Portfolio from '../assets/images/Portfolio.jpg'


const Projects = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return (
    <div className="about" id="project">
        <div className="details">   
            <div data-aos="fade-up" data-aos-offset="190" data-aos-easing="fade-up" data-aos-duration="600">
                <h1 style={{marginLeft:'10px'}}>Projects</h1>
            </div> 
            <div className="line" data-aos="slide-right" data-aos-offset="193" data-aos-easing="fade-up" data-aos-duration="400">
            </div> 
            <div className="container internships">  
            <div data-aos="fade-right" data-aos-offset="210" data-aos-easing="fade-up" data-aos-duration="600">
                <div class="card text-center intern-card">
                    <div data-aos="fade-down" data-aos-offset="250" data-aos-easing="fade-up" data-aos-duration="600">
                        <div class="card-header intern-head">
                            <Nav pills>
                                <NavItem>
                                    <NavLink style={activeTab==='1'?{backgroundColor:'#c1e6ff',color:'#0e3854',transition:'300ms'}:{color:'#f1f1f1',transition:'300ms'}}
                                        className={classnames({ active: activeTab === '1' })}
                                        onClick={() => { toggle('1'); }}
                                    >
                                        Portfolio-II (Pro)
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink style={activeTab==='2'?{backgroundColor:'#c1e6ff',color:'#0e3854',transition:'300ms'}:{color:'#f1f1f1',transition:'300ms'}}
                                        className={classnames({ active: activeTab === '2' })}
                                        onClick={() => { toggle('2'); }}
                                    >
                                        MY INFO
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink style={activeTab==='3'?{backgroundColor:'#c1e6ff',color:'#0e3854',transition:'300ms'}:{color:'#f1f1f1',transition:'300ms'}}
                                        className={classnames({ active: activeTab === '3' })}
                                        onClick={() => { toggle('3'); }}
                                    >
                                        AM System
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink style={activeTab==='4'?{backgroundColor:'#c1e6ff',color:'#0e3854',transition:'300ms'}:{color:'#f1f1f1',transition:'300ms'}}
                                        className={classnames({ active: activeTab === '4' })}
                                        onClick={() => { toggle('4'); }}
                                    >
                                        Portfolio-I
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </div>
                    </div>
                    <div data-aos="zoom-out-up" data-aos-offset="240" data-aos-easing="fade-up" data-aos-duration="600">
                        <div class="card-body intern-body">
                            <TabContent activeTab={activeTab}>
                                <TabPane tabId="1">
                                    <Row>
                                        <Col sm="12">
                                        <div class="card bg-dark text-white">
                                                <img src={Portfolio} class="card-img img-fluid" alt="..."/>
                                                <div class="img-text card-img-overlay">
                                                    <h4 class="card-title">Aalok Kumar - Portfolio</h4>
                                                    <p class="card-text">This is my current portfolio website. It also supports that anybody else can also fill their own details and use as their potfolio. It needs an access code to access this website.</p>
                                                    <p class="card-text">View: <a href="https://aaloksport.web.app/" >https://aaloksport.web.app/</a></p>
                                                    <p class="card-text text-warning">Apr 2021</p>
                                                </div>
                                            </div>               
                                        </Col>
                                    </Row>
                                </TabPane>
                                <TabPane tabId="2">
                                    <Row>
                                        <Col sm="12">
                                            <div class="card bg-dark text-white">
                                                <img src={MYINFO} class="card-img img-fluid" alt="..."/>
                                                <div class="img-text card-img-overlay">
                                                    <h4 class="card-title">MY INFO</h4>
                                                    <p class="card-text">The website has features to add and access your portfolio in interactive way. The website will display all the required information that a resume has in general. Anyone can register and use this website.</p>
                                                    <p class="card-text">View: <a href="https://linktomyinfo.web.app/" >https://linktomyinfo.web.app/</a></p>
                                                    <p class="card-text text-warning">Jun 2020</p>
                                                </div>
                                            </div>               
                                        </Col>
                                    </Row>
                                </TabPane>
                                <TabPane tabId="3">
                                    <Row>
                                        <Col sm="12">
                                            <div class="card bg-dark text-white">
                                                <img src={AttdSys} class="card-img img-fluid" alt="..."/>
                                                <div class="img-text card-img-overlay">
                                                    <h4 class="card-title">Attendance Management System</h4>
                                                    <p class="card-text">Taking Attendance during online classes is time taking. So this website work as middle-man between online classes and student, and records student's attendance.</p>
                                                    <p class="card-text">View: <a href="https://online-attend.web.app/" >https://online-attend.web.app/</a></p>
                                                    <p class="card-text text-warning">Aug 2020</p>
                                                </div>
                                            </div>               
                                        </Col>
                                    </Row>
                                </TabPane>
                                <TabPane tabId="4">
                                    <Row>
                                        <Col sm="12">
                                            <div class="card bg-dark text-white">
                                                <img src={myinfo} class="card-img img-fluid" alt="..."/>
                                                <div class="img-text card-img-overlay">
                                                    <h4 class="card-title">My Info</h4>
                                                    <p class="card-text">This is my first ever Web Dev project and also my first portfolio (current details not updated).</p>
                                                    <p class="card-text">View: <a href="https://thecoderas.github.io/my-info/" >https://thecoderas.github.io/my-info/</a></p>
                                                    <p class="card-text text-warning">Apr 2020</p>
                                                </div>
                                            </div>               
                                        </Col>
                                    </Row>
                                </TabPane>
                            </TabContent>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>      
    </div>
  );
}

export default Projects;