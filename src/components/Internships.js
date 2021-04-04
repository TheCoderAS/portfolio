import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames'

const Internships = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return (
    <div className="about">
        <div className="details">   
            <div data-aos="fade-up" data-aos-offset="190" data-aos-easing="fade-up" data-aos-duration="600">
                <h1 style={{marginLeft:'10px'}}>Internships</h1>
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
                                    <NavLink style={activeTab==='1'?{backgroundColor:'#c1e6ff',color:'#0e3854'}:{color:'#f1f1f1'}}
                                        className={classnames({ active: activeTab === '1' })}
                                        onClick={() => { toggle('1'); }}
                                    >
                                        Kapadh
                                    </NavLink>
                                    </NavItem>
                                    <NavItem>
                                    <NavLink style={activeTab==='2'?{backgroundColor:'#c1e6ff',color:'#0e3854'}:{color:'#f1f1f1'}}
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
                        <div class="card-body intern-body">
                            <TabContent activeTab={activeTab}>
                                <TabPane tabId="1">
                                    <Row>
                                        <Col sm="12">
                                            <div class="card bg-dark text-white">
                                                <img src="https://res.cloudinary.com/interflora/f_auto,q_auto,t_blogimage/blogs/blue%20rose1569237015449.jpg" class="card-img" alt="..."/>
                                                <div class="card-img-overlay">
                                                    <h5 class="card-title">Card title</h5>
                                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                    <p class="card-text">Last updated 3 mins ago</p>
                                                </div>
                                            </div>               
                                        </Col>
                                    </Row>
                                </TabPane>
                                <TabPane tabId="2">
                                    <Row>
                                        <Col sm="12">
                                            <div class="card bg-dark text-white">
                                                <img src="https://i.pinimg.com/originals/6b/e2/b6/6be2b660817c7a0363546761092294aa.jpg" class="card-img" alt="..."/>
                                                <div class="card-img-overlay">
                                                    <h5 class="card-title">Card title</h5>
                                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                    <p class="card-text">Last updated 3 mins ago</p>
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