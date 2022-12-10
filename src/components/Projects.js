import React, { useState } from 'react';
import { badges } from '../config/vars';
import Portfolio from '../assets/images/Portfolio.jpg'
import Kanishka from '../assets/images/kanishka.jpg'
import { Tab, Tabs } from '@mui/material';
import { Col, Row } from 'reactstrap';

const project = [
    {
        name: 'Kanishka Photos',
        image: Kanishka,
        skills: [
            badges.mongodb,
            badges.express,
            badges.react,
            badges.node,
            badges.html,
            badges.css,
            badges.javascript,
            badges.bootstrap,
            badges.git
        ],
        description: [
            'User authentication like Login, Signup, Change Password, Forget Password.',
            'Post your image for sale.',
            'Upload image and basic edit options like crop ad resize image.',
            'Write, edit, delete your comment on any image.',
            'Deployed on Firebase.'
        ],
        link: 'https://github.com/TheCoderAS/KanishkaPhotos',
        date: 'May 2021'
    },
    {
        name: 'My Portfolio',
        image: Portfolio,
        skills: [
            badges.react,
            badges.javascript,
            badges.bootstrap,
            badges.css,
            badges.firebase,
            badges.figma,
            badges.git
        ],
        description: [
            'My basic portfolio website. Deployed on Firebase.',
            'Full of animations.',
            'Social media contact links, detailed info about myself.'
        ],
        link: 'http://aaloksport.web.app/',
        date: 'June 2021'
    },
];
function ArrowRight() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16"><path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" /></svg>
}

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <>{children}</>
            )}
        </div>
    );
}
const Projects = (props) => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className="about" id="project">
            <div className="details">
                <div data-aos="fade-up" data-aos-offset="190" data-aos-easing="fade-up" data-aos-duration="600">
                    <h1 style={{ marginLeft: '10px' }}>Projects</h1>
                </div>
                <div className="line" data-aos="slide-right" data-aos-offset="193" data-aos-easing="fade-up" data-aos-duration="400">
                </div>
                <div className="container internships">
                    <div data-aos="fade-right" data-aos-offset="210" data-aos-easing="fade-up" data-aos-duration="600">
                        <div className="card text-center intern-card">
                            <div data-aos="fade-down" data-aos-offset="250" data-aos-easing="fade-up" data-aos-duration="600">
                                <div className="card-header intern-head">
                                    <Tabs value={value} onChange={handleChange} centered>
                                        {project.map((item, index) => {
                                            return <Tab key={index} label={item.name} sx={{ color: 'white' }} />
                                        })}
                                    </Tabs>
                                </div>
                            </div>
                            <div data-aos="zoom-out-up" data-aos-offset="240" data-aos-easing="fade-up" data-aos-duration="600">
                                <div className="card-body intern-body">
                                    {project.map((item, index) => {
                                        return (
                                            <TabPanel key={index} index={index} value={value}>
                                                <Row>
                                                    <Col sm="12">
                                                        <div className="card bg-dark text-white">
                                                            <img src={item.image} className="card-img img-fluid" alt="..." />
                                                            <div className="img-text card-img-overlay">
                                                                <h4 className="card-title">{item.name}</h4>
                                                                <div className='container pb-3'>
                                                                    <Row>
                                                                        {item.skills.map((skill, id) => <Col key={id} xs={6} sm={4} md={2} className
                                                                            ="text-center p-1"><img style={{ borderRadius: '20px' }} src={skill} alt={item.name} /></Col>)}
                                                                    </Row>
                                                                </div>
                                                                <ul className="list-unstyled">
                                                                    {item.description.map((desc, id) => <li className="card-text" key={id}><ArrowRight /> {desc}</li>)}
                                                                </ul>
                                                                <p className="card-text">View: <a href={item.link} >{item.link}</a></p>
                                                                <p className="card-text text-warning">{item.date}</p>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </TabPanel>
                                        )
                                    })}
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