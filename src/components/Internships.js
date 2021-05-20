import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames'

import Kapadh from '../assets/images/kapadh.jpg'
import CodeSpeedy from '../assets/images/codespeedy.jpg'

const Internships = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return (
    <div className="about" id="internship">
        <div className="details">   
            <div data-aos="fade-up" data-aos-offset="190" data-aos-easing="fade-up" data-aos-duration="600">
                <h1 style={{marginLeft:'10px'}}>Internships</h1>
            </div> 
            <div className="line" data-aos="slide-right" data-aos-offset="193" data-aos-easing="fade-up" data-aos-duration="400">
            </div> 
            <div className="container internships">  
            <div data-aos="fade-right" data-aos-offset="210" data-aos-easing="fade-up" data-aos-duration="600">
                <div className="card text-center intern-card">
                    <div data-aos="fade-down" data-aos-offset="250" data-aos-easing="fade-up" data-aos-duration="600">
                        <div className="card-header intern-head">
                            <Nav pills>
                                <NavItem>
                                    <NavLink style={activeTab==='1'?{backgroundColor:'#c1e6ff',color:'#0e3854',transition:'300ms'}:{color:'#f1f1f1',transition:'300ms'}}
                                        className={classnames({ active: activeTab === '1' })}
                                        onClick={() => { toggle('1'); }}
                                    >
                                        Kapadh
                                    </NavLink>
                                    </NavItem>
                                    <NavItem>
                                    <NavLink style={activeTab==='2'?{backgroundColor:'#c1e6ff',color:'#0e3854',transition:'300ms'}:{color:'#f1f1f1',transition:'300ms'}}
                                        className={classnames({ active: activeTab === '2' })}
                                        onClick={() => { toggle('2'); }}
                                    >
                                        CodeSpeedy
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-offset="240" data-aos-easing="fade-up" data-aos-duration="600">
                        <div className="card-body intern-body">
                            <TabContent activeTab={activeTab}>
                                <TabPane tabId="1">
                                    <Row>
                                        <Col sm="12">
                                            <div className="card bg-dark text-white">
                                                <img src={Kapadh} className="card-img img-fluid" alt="..."/>
                                                <div className="img-text card-img-overlay">
                                                    <h4 className="card-title">Kapadh</h4>
                                                    <p className="card-text">Kapadh was founded by a team of university students from NIT Hamirpur. Kapadh is an online solution promoting knowledge for all. It enables people with knowledge to earn by connecting them to people who seek knowledge. It makes it easy for people to get the right guidance for solving their problems.</p>
                                                    <p className="card-text">View: <a href="https://kapadh.com/" >https://kapadh.com/</a></p>
                                                    <p className="card-text">Role: <b>Full Stack Developer</b></p>
                                                    <p className="card-text text-warning">Dec 2020 - Apr 2021</p>
                                                </div>
                                            </div>               
                                        </Col>
                                    </Row>
                                </TabPane>
                                <TabPane tabId="2">
                                    <Row>
                                        <Col sm="12">
                                        <div className="card bg-dark text-white">
                                                <img src={CodeSpeedy} className="card-img img-fluid" alt="..."/>
                                                <div className="img-text card-img-overlay">
                                                    <h5 className="card-title">CodeSpeedy Technology Pvt. Ltd.</h5>
                                                    <p className="card-text">CodeSpeedy started as a coding solution blogging platform in the year 2016 to help computer programmer, web developer and software developer. Our blog posts contain articles and tutorials on Python, JavaScript, PHP, C++, CSS, WordPress and even much more.</p>
                                                    <p className="card-text">Role: <b>C++ Programmer</b></p>
                                                    <p className="card-text text-warning">Apr 2021 - Present</p>
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

export default Internships;