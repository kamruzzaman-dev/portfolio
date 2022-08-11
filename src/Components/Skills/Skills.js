import React from 'react';
import './skill.css';
import skillBGI from '../../assets/skills.svg';
import skillImage from '../../assets/profile_photo.png';
const Skills = () => {
    return (
        <div className='max-w-7xl mx-auto min-h-screen' id='skill'>
            <div className='p-5'>
                <h4 className='text-center'>My Level of Knowledge in some techonology</h4>
                <h1 className='text-6xl text-center font-bold'>My Skills</h1>
                <hr className='my-5 bg-red-500 h-1' />
            </div>

            <div className="hero bg-cover bg-no-repeat bg-center">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className='w-full card'>
                        <div class="skills bg-base-200">
                            <div class="skill">
                                <div class="skill-name"><span className='skill-name-text'>HTML</span></div>
                                <div class="skill-bar">
                                    <div class="skill-per" per="90%" style={{ 'maxWidth': '90%' }}></div>
                                </div>
                            </div>

                            <div class="skill">
                                <div class="skill-name"><span className='skill-name-text'>CSS</span></div>
                                <div class="skill-bar">
                                    <div class="skill-per" per="70%" style={{ 'maxWidth': '70%' }}></div>
                                </div>
                            </div>

                            <div class="skill">
                                <div class="skill-name"><span className='skill-name-text'>Bootstrap</span></div>
                                <div class="skill-bar">
                                    <div class="skill-per" per="90%" style={{ 'maxWidth': '90%' }}></div>
                                </div>
                            </div>
                            <div class="skill">
                                <div class="skill-name"><span className='skill-name-text'>tailwind</span></div>
                                <div class="skill-bar">
                                    <div class="skill-per" per="85%" style={{ 'maxWidth': '85%' }}></div>
                                </div>
                            </div>
                            <div class="skill">
                                <div class="skill-name"><span className='skill-name-text'>Javascript</span></div>
                                <div class="skill-bar">
                                    <div class="skill-per" per="65%" style={{ 'maxWidth': '65%' }}></div>
                                </div>
                            </div>
                            <div class="skill">
                                <div class="skill-name"><span className='skill-name-text'>React</span></div>
                                <div class="skill-bar">
                                    <div class="skill-per" per="75%" style={{ 'maxWidth': '75%' }}></div>
                                </div>
                            </div>
                            <div class="skill">
                                <div class="skill-name"><span className='skill-name-text'>node & express</span></div>
                                <div class="skill-bar">
                                    <div class="skill-per" per="40%" style={{ 'maxWidth': '45%' }}></div>
                                </div>
                            </div>
                            <div class="skill">
                                <div class="skill-name"><span className='skill-name-text'>MongoDB</span></div>
                                <div class="skill-bar">
                                    <div class="skill-per" per="40%" style={{ 'maxWidth': '40%' }}></div>
                                </div>
                            </div>
                            <div class="skill">
                                <div class="skill-name"><span className='skill-name-text'>git and github</span></div>
                                <div class="skill-bar">
                                    <div class="skill-per" per="35%" style={{ 'maxWidth': '35%' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img src={`https://media.istockphoto.com/photos/hand-with-marker-writing-skill-concept-picture-id637711198?k=20&m=637711198&s=612x612&w=0&h=bznzNhH923ckyX6LINoDPtH6z3wbB0yO6Gvk5fQR0ms=`} className="w-full lg:w-1/2 rounded-lg shadow-3xl" alt='' />
                </div>
            </div>

        </div>
    );
};

export default Skills;