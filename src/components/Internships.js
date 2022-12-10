// import React, { useState } from 'react';
// import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
// import classnames from 'classnames'

// import Kapadh from '../assets/images/kapadh.jpg'
// import Websitera from '../assets/images/websitera.png'

// const InternshipsOld = (props) => {
//     const [activeTab, setActiveTab] = useState('1');

//     const toggle = tab => {
//         if (activeTab !== tab) setActiveTab(tab);
//     }

//     return (
//         <div className="about" id="internship">
//             <div className="details">
//                 <div data-aos="fade-up" data-aos-offset="190" data-aos-easing="fade-up" data-aos-duration="600">
//                     <h1 style={{ marginLeft: '10px' }}>Internships</h1>
//                 </div>
//                 <div className="line" data-aos="slide-right" data-aos-offset="193" data-aos-easing="fade-up" data-aos-duration="400">
//                 </div>
//                 <div className="container internships">
//                     <div data-aos="fade-right" data-aos-offset="210" data-aos-easing="fade-up" data-aos-duration="600">
//                         <div className="card text-center intern-card">
//                             <div data-aos="fade-down" data-aos-offset="250" data-aos-easing="fade-up" data-aos-duration="600">
//                                 <div className="card-header intern-head">
//                                     <Nav pills>
//                                         <NavItem>
//                                             <NavLink style={activeTab === '1' ? { backgroundColor: '#c1e6ff', color: '#0e3854', transition: '300ms' } : { color: '#f1f1f1', transition: '300ms' }}
//                                                 className={classnames({ active: activeTab === '1' })}
//                                                 onClick={() => { toggle('1'); }}
//                                             >
//                                                 WHPL
//                                             </NavLink>
//                                         </NavItem>
//                                         <NavItem>
//                                             <NavLink style={activeTab === '2' ? { backgroundColor: '#c1e6ff', color: '#0e3854', transition: '300ms' } : { color: '#f1f1f1', transition: '300ms' }}
//                                                 className={classnames({ active: activeTab === '2' })}
//                                                 onClick={() => { toggle('2'); }}
//                                             >
//                                                 Rai TechIntro
//                                             </NavLink>
//                                         </NavItem>
//                                         <NavItem>
//                                             <NavLink style={activeTab === '3' ? { backgroundColor: '#c1e6ff', color: '#0e3854', transition: '300ms' } : { color: '#f1f1f1', transition: '300ms' }}
//                                                 className={classnames({ active: activeTab === '3' })}
//                                                 onClick={() => { toggle('3'); }}
//                                             >
//                                                 Spartificial Innovations
//                                             </NavLink>
//                                         </NavItem>
//                                         <NavItem>
//                                             <NavLink style={activeTab === '4' ? { backgroundColor: '#c1e6ff', color: '#0e3854', transition: '300ms' } : { color: '#f1f1f1', transition: '300ms' }}
//                                                 className={classnames({ active: activeTab === '4' })}
//                                                 onClick={() => { toggle('4'); }}
//                                             >
//                                                 Sannkalp Educare
//                                             </NavLink>
//                                         </NavItem>
//                                         <NavItem>
//                                             <NavLink style={activeTab === '5' ? { backgroundColor: '#c1e6ff', color: '#0e3854', transition: '300ms' } : { color: '#f1f1f1', transition: '300ms' }}
//                                                 className={classnames({ active: activeTab === '5' })}
//                                                 onClick={() => { toggle('5'); }}
//                                             >
//                                                 Kapadh
//                                             </NavLink>
//                                         </NavItem>
//                                     </Nav>
//                                 </div>
//                             </div>
//                             <div data-aos="fade-up" data-aos-offset="240" data-aos-easing="fade-up" data-aos-duration="600">
//                                 <div className="card-body intern-body">
//                                     <TabContent activeTab={activeTab}>
//                                         <TabPane tabId="1">
//                                             <Row>
//                                                 <Col sm="12">
//                                                     <div className="card bg-dark text-white">
//                                                         <img src={Websitera} className="card-img img-fluid" alt="..." />
//                                                         <div className="img-text card-img-overlay">
//                                                             <h4 className="card-title">Websitera House Private Limited</h4>
//                                                             <p className="card-text">Kapadh was founded by a team of university students from NIT Hamirpur. Kapadh is an online solution promoting knowledge for all. It enables people with knowledge to earn by connecting them to people who seek knowledge. It makes it easy for people to get the right guidance for solving their problems.</p>
//                                                             <p className="card-text">View: <a href="https://websiterahouse.com/" >https://websiterahouse.com/</a></p>
//                                                             <p className="card-text">Role: <b>SDE Intern</b></p>
//                                                             <p className="card-text text-warning">May 2022 - Present</p>
//                                                         </div>
//                                                     </div>
//                                                 </Col>
//                                             </Row>
//                                         </TabPane>
//                                         <TabPane tabId="2">
//                                             <Row>
//                                                 <Col sm="12">
//                                                     <div className="card bg-dark text-white">
//                                                         <img src={Websitera} className="card-img img-fluid" alt="..." />
//                                                         <div className="img-text card-img-overlay">
//                                                             <h5 className="card-title">Rai TechIntro Private Limited</h5>
//                                                             <p className="card-text">CodeSpeedy started as a coding solution blogging platform in the year 2016 to help computer programmer, web developer and software developer. Our blog posts contain articles and tutorials on Python, JavaScript, PHP, C++, CSS, WordPress and even much more.</p>
//                                                             <p className="card-text">Role: <b>Frontend Developer Intern</b></p>
//                                                             <p className="card-text text-warning">Jul 2021 - Oct 2021</p>
//                                                         </div>
//                                                     </div>
//                                                 </Col>
//                                             </Row>
//                                         </TabPane>
//                                         <TabPane tabId="3">
//                                             <Row>
//                                                 <Col sm="12">
//                                                     <div className="card bg-dark text-white">
//                                                         <img src={Websitera} className="card-img img-fluid" alt="..." />
//                                                         <div className="img-text card-img-overlay">
//                                                             <h5 className="card-title">Spartificial Innovations</h5>
//                                                             <p className="card-text">CodeSpeedy started as a coding solution blogging platform in the year 2016 to help computer programmer, web developer and software developer. Our blog posts contain articles and tutorials on Python, JavaScript, PHP, C++, CSS, WordPress and even much more.</p>
//                                                             <p className="card-text">Role: <b>Freelance (Full Stack Development)</b></p>
//                                                             <p className="card-text text-warning">Jun 2021 - Aug 2021</p>
//                                                         </div>
//                                                     </div>
//                                                 </Col>
//                                             </Row>
//                                         </TabPane>
//                                         <TabPane tabId="4">
//                                             <Row>
//                                                 <Col sm="12">
//                                                     <div className="card bg-dark text-white">
//                                                         <img src={Websitera} className="card-img img-fluid" alt="..." />
//                                                         <div className="img-text card-img-overlay">
//                                                             <h5 className="card-title">Sannkalp Educare Foundation</h5>
//                                                             <p className="card-text">CodeSpeedy started as a coding solution blogging platform in the year 2016 to help computer programmer, web developer and software developer. Our blog posts contain articles and tutorials on Python, JavaScript, PHP, C++, CSS, WordPress and even much more.</p>
//                                                             <p className="card-text">Role: <b>Frontend Developer Intern</b></p>
//                                                             <p className="card-text text-warning">Jun 2021 - Jun 2021</p>
//                                                         </div>
//                                                     </div>
//                                                 </Col>
//                                             </Row>
//                                         </TabPane>
//                                         <TabPane tabId="5">
//                                             <Row>
//                                                 <Col sm="12">
//                                                     <div className="card bg-dark text-white">
//                                                         <img src={Websitera} className="card-img img-fluid" alt="..." />
//                                                         <div className="img-text card-img-overlay">
//                                                             <h5 className="card-title">Kapadh</h5>
//                                                             <p className="card-text">CodeSpeedy started as a coding solution blogging platform in the year 2016 to help computer programmer, web developer and software developer. Our blog posts contain articles and tutorials on Python, JavaScript, PHP, C++, CSS, WordPress and even much more.</p>
//                                                             <p className="card-text">Role: <b>Frontend Developer Intern</b></p>
//                                                             <p className="card-text text-warning">Dec 2020 - Mar 2021</p>
//                                                         </div>
//                                                     </div>
//                                                 </Col>
//                                             </Row>
//                                         </TabPane>
//                                     </TabContent>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Internships;

import * as React from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import websitera from '../assets/images/websiteralogo.jpg';
import raitech from '../assets/images/raitech.jpeg';
import sannkalp from '../assets/images/sannkalp.jpeg';
import spartificial from '../assets/images/spartificial.jpeg';
import kapadh from '../assets/images/kapadh.jpeg';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { styled } from '@mui/material/styles';

const steps = [
    {
        role: 'Software Developer',
        company: 'Websitera House Private Limited • Internship',
        duration: 'May 2022 - Present',
        description: 'REST APIs Integration, React.js, HTML, CSS, JavaScript'
    },
    {
        role: 'Frontend Developer',
        company: 'Rai TechIntro Private Limited • Internship',
        duration: 'Jul 2021 - Oct 2021 • 4 months',
        description: 'REST APIs Integration, React.js, HTML, CSS, JavaScript'
    },
    {
        role: 'Full stack Developer',
        company: 'Spatificial Innovations Private Limited • Freelance',
        duration: 'Jun 2021 - Aug 2021 • 3 months',
        description: 'Node.js, MongoDB, Express.js, React.js, HTML, CSS, JavaScript, AWS EC2, Nginx Server'
    },
    {
        role: 'Full stack Developer',
        company: 'Sannkalp Siksha • Internship',
        duration: 'Jun 2021 - Jun 2021 • 1 months',
        description: 'Node.js, MongoDB, Express.js, React.js, HTML, CSS, JavaScript'
    },
    {
        role: 'Web Developer • Internship',
        company: 'Kapadh',
        duration: 'Dec 2020 - Mar 2021 • 4 months',
        description: 'React.js, Firebase, HTML, CSS, JavaScript'
    },

];

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`& .${stepConnectorClasses.line}`]: {
        height: 5,
        position: 'relative',
        left: '10px',
        width: 3,
        border: 0,
        backgroundColor:
            theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
        borderRadius: 1,
    },
}));

const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
}));

function ColorlibStepIcon(props) {
    const { active, completed, className } = props;

    const icons = {
        1: <img src={websitera} style={{ width: '50px', padding: '3px', borderRadius: '50%' }} />,
        2: <img src={raitech} style={{ width: '50px', padding: '3px', borderRadius: '50%' }} />,
        3: <img src={spartificial} style={{ width: '50px', padding: '3px', borderRadius: '50%' }} />,
        4: <img src={sannkalp} style={{ width: '50px', padding: '3px', borderRadius: '50%' }} />,
        5: <img src={kapadh} style={{ width: '50px', padding: '3px', borderRadius: '50%' }} />,
    };

    return (
        <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
            {icons[String(props.icon)]}
        </ColorlibStepIconRoot>
    );
}

export default function Internships() {
    return (
        <div className="about" id="internship">
            <div className="details">
                <div data-aos="fade-up" data-aos-offset="190" data-aos-easing="fade-up" data-aos-duration="600">
                    <h1 style={{ marginLeft: '10px' }}>Internships</h1>
                </div>
                <div className="line" data-aos="slide-right" data-aos-offset="193" data-aos-easing="fade-up" data-aos-duration="400">
                </div>
                <div className="container internships">
                    <div data-aos="fade-right" data-aos-offset="210" data-aos-easing="fade-up" data-aos-duration="600">
                        <Stepper orientation="vertical" connector={<ColorlibConnector />}>
                            {steps.map((step, index) => (
                                <Step key={index} data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-offset="250" data-aos-easing="ease-in" data-aos-duration="800">
                                    <StepLabel data-aos="flip-left" data-aos-offset="236" data-aos-easing="ease-in" data-aos-duration="800" StepIconComponent={ColorlibStepIcon}>
                                        <Typography sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}>{step.role}</Typography>
                                        <Typography>{step.company}</Typography>
                                        <Typography variant="caption" color="#89e2f7">{step.duration}</Typography>
                                        <Typography variant="body2"><b>Skills: </b>{step.description}</Typography>
                                    </StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                    </div>
                </div>
            </div>
        </div>

    );
}
