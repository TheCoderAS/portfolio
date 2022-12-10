import { ArrowRight } from '@mui/icons-material';
import React from 'react';
import { badges } from '../config/vars';

const skills = {
    courses: [
        badges.mern,
        badges.oops,
        badges.os,
        badges.dsa,
        badges.cn,
        badges.dbms
    ],
    languages: [
        badges.cpp,
        badges.python,
        badges.javascript,
        badges.matlab
    ],
    tools: [
        badges.mongodb,
        badges.firebase,
        badges.react,
        badges.express,
        badges.node,
        badges.html,
        badges.css,
        badges.bootstrap,
        badges.linux,
        badges.git,
        badges.photoshop,
        badges.figma
    ]
};
const Skills = (props) => {
    return (
        <div className="about" id="skill">
            <div className="details">
                <div data-aos="fade-up" data-aos-offset="190" data-aos-easing="fade-up" data-aos-duration="600">
                    <h1 style={{ marginLeft: '10px' }}>Skills</h1>
                </div>
                <div className="line" data-aos="slide-right" data-aos-offset="193" data-aos-easing="fade-up" data-aos-duration="400">
                </div>
                <div className="container skills">
                    <div className="row">
                        <div className="text-left col-12 col-sm-6">
                            <ul className="list-group list-group-flush">
                                <li data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-offset="250" data-aos-easing="ease-in" data-aos-duration="400" className="list-group-item"><ArrowRight /><strong>Software Dev &amp; Courses&nbsp;</strong>
                                    <br></br><small>
                                        <table className="table table-borderless">
                                            <tbody>
                                                <tr data-aos="flip-left" data-aos-offset="236" data-aos-easing="ease-in" data-aos-duration="800" className="skill-text">
                                                    <td data-aos="fade-up" data-aos-offset="236" data-aos-easing="ease-in" data-aos-duration="800"><img src={skills.courses[0]} alt={skills.courses[0]} /></td>
                                                    <td data-aos="fade-up" data-aos-offset="236" data-aos-easing="ease-in" data-aos-duration="800" className="text-right"><img src={skills.courses[1]} alt={skills.courses[1]} /></td>
                                                </tr>
                                                <tr data-aos="flip-left" data-aos-offset="236" data-aos-easing="ease-in" data-aos-duration="800" className="skill-text">
                                                    <td data-aos="fade-up" data-aos-offset="236" data-aos-easing="ease-in" data-aos-duration="800"><img src={skills.courses[2]} alt={skills.courses[2]} /></td>
                                                    <td data-aos="fade-up" data-aos-offset="236" data-aos-easing="ease-in" data-aos-duration="800" className="text-right"><img src={skills.courses[3]} alt={skills.courses[3]} /></td>
                                                </tr>
                                                <tr data-aos="flip-left" data-aos-offset="236" data-aos-easing="ease-in" data-aos-duration="800" className="skill-text">
                                                    <td data-aos="fade-up" data-aos-offset="236" data-aos-easing="ease-in" data-aos-duration="800"><img src={skills.courses[4]} alt={skills.courses[4]} /></td>
                                                    <td data-aos="fade-up" data-aos-offset="236" data-aos-easing="ease-in" data-aos-duration="800" className="text-right"><img src={skills.courses[5]} alt={skills.courses[5]} /></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </small></li>
                            </ul>
                        </div>
                        <div className="text-left col-12 col-sm-6">
                            <ul className="list-group list-group-flush">
                                <li data-aos="fade-up" data-aos-offset="250" data-aos-easing="ease-in" data-aos-duration="400" className="list-group-item"><ArrowRight /><strong>Tools &amp; Technologies:&nbsp;</strong>
                                    <br></br><small>
                                        <table className="table table-borderless">
                                            <tbody>
                                                <tr data-aos="flip-left" data-aos-offset="236" data-aos-easing="ease-in" data-aos-duration="800" className="skill-text">
                                                    <td data-aos="fade-up" data-aos-offset="236" data-aos-easing="ease-in" data-aos-duration="800"><img src={skills.tools[9]} height="28" alt="git" /></td>
                                                    <td data-aos="fade-up" data-aos-offset="236" data-aos-easing="ease-in" data-aos-duration="800" className="text-right"><img src={skills.tools[0]} alt="mongodb" /></td>
                                                </tr>
                                                <tr data-aos="flip-left" data-aos-offset="236" data-aos-easing="ease-in" data-aos-duration="800" className="skill-text">
                                                    <td data-aos="fade-up" data-aos-offset="236" data-aos-easing="ease-in" data-aos-duration="800"><img src={skills.tools[1]} alt="firebase" /></td>
                                                    <td data-aos="fade-up" data-aos-offset="236" data-aos-easing="ease-in" data-aos-duration="800" className="text-right"><img src={skills.tools[2]} alt="React" /></td>

                                                </tr>
                                                <tr data-aos="flip-left" data-aos-offset="236" data-aos-easing="ease-in" data-aos-duration="800" className="skill-text">
                                                    <td data-aos="fade-up" data-aos-offset="236" data-aos-easing="ease-in" data-aos-duration="800"><img src={skills.tools[3]} alt="express" /></td>
                                                    <td data-aos="fade-up" data-aos-offset="236" data-aos-easing="ease-in" data-aos-duration="800" className="text-right"><img src={skills.tools[4]} alt="node" /></td>

                                                </tr>
                                                <tr data-aos="flip-left" data-aos-offset="236" data-aos-easing="ease-in" data-aos-duration="800" className="skill-text">
                                                    <td data-aos="fade-up" data-aos-offset="236" data-aos-easing="ease-in" data-aos-duration="800"><img src={skills.tools[5]} alt="html" /></td>
                                                    <td data-aos="fade-up" data-aos-offset="236" data-aos-easing="ease-in" data-aos-duration="800" className="text-right"><img src={skills.tools[6]} alt="css" /></td>

                                                </tr>
                                                <tr data-aos="flip-left" data-aos-offset="236" data-aos-easing="ease-in" data-aos-duration="800" className="skill-text">
                                                    <td data-aos="fade-up" data-aos-offset="236" data-aos-easing="ease-in" data-aos-duration="800"><img src={skills.tools[7]} alt="bootstrap" /></td>
                                                    <td data-aos="fade-up" data-aos-offset="236" data-aos-easing="ease-in" data-aos-duration="800" className="text-right"><img src={skills.tools[8]} alt="linux" /></td>
                                                </tr>
                                                <tr data-aos="flip-left" data-aos-offset="236" data-aos-easing="ease-in" data-aos-duration="800" className="skill-text">
                                                    <td data-aos="fade-up" data-aos-offset="236" data-aos-easing="ease-in" data-aos-duration="800"><img src={skills.tools[10]} alt="photoshop" /></td>
                                                    <td data-aos="fade-up" data-aos-offset="236" data-aos-easing="ease-in" data-aos-duration="800" className="text-right"><img src={skills.tools[11]} alt="figma" /></td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </small></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="text-left col-12 col-sm-6">
                            <ul className="list-group list-group-flush">
                                <li data-aos="fade-up" data-aos-offset="250" data-aos-easing="ease-in" data-aos-duration="400" className="list-group-item"><ArrowRight /><strong>Languages:&nbsp;</strong>
                                    <br></br><small>
                                        <table className="table table-borderless">
                                            <tbody>
                                                <tr data-aos="flip-left" data-aos-offset="236" data-aos-easing="ease-in" data-aos-duration="800" className="skill-text">
                                                    <td data-aos="fade-up" data-aos-offset="236" data-aos-easing="ease-in" data-aos-duration="800"><img src={skills.languages[0]} alt="C++" /></td>
                                                    <td data-aos="fade-up" data-aos-offset="236" data-aos-easing="ease-in" data-aos-duration="800" className="text-right"><img src={skills.languages[1]} alt="Pythonn" /></td>
                                                </tr>
                                                <tr data-aos="flip-left" data-aos-offset="236" data-aos-easing="ease-in" data-aos-duration="800" className="skill-text">
                                                    <td data-aos="fade-up" data-aos-offset="236" data-aos-easing="ease-in" data-aos-duration="800"><img src={skills.languages[2]} alt="JavaScript" /></td>
                                                    <td data-aos="fade-up" data-aos-offset="236" data-aos-easing="ease-in" data-aos-duration="800" className="text-right"><img src={skills.languages[3]} alt="matlab" /></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </small></li>
                            </ul>
                        </div>
                        <div className="text-left col-12 col-sm-6">
                            <ul className="list-group list-group-flush">
                                <li data-aos="fade-up" data-aos-offset="250" data-aos-easing="ease-in" data-aos-duration="400" className="list-group-item"><ArrowRight /><strong>GitHub Stats:&nbsp;</strong>
                                    <br></br>
                                    <img align="center" src="https://github-readme-stats.vercel.app/api?username=thecoderas&include_all_commits=true&show_icons=true&count_private=true&locale=en&theme=algolia" alt="thecoderas" width="95%" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;