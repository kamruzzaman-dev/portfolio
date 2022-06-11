import React from 'react';
import './About.css';
import Intro from '../Intro/Intro';
import Skills from '../Skills/Skills';
import Resume from '../Resume/Resume';
import MyServices from '../MyServices/MyServices';
const About = () => {
   return (
        <section className="p-2 lg:p-10 bg-slate-200 card shadow-lg my-16 mx-4 lg:mx-10 about-container">
            <Intro/>
            <Resume/>
            <Skills/>
            <MyServices/>
        </section>
    );
};

export default About;




