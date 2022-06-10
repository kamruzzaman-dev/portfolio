import React from 'react';
import './skill.css';
import skillBGI from '../../assets/skills.svg';
const Skills = () => {
    return (
        <div className='min-h-screen'>
            <div className='p-5'>
                <h4 className='text-center'>My Level of Knowledge in some techonology</h4>
                <h1 className='text-6xl text-center font-bold'>My Skills</h1>
                <hr className='my-4' />
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2'>
                <div class="skills bg-base-200">
                    <div class="skill">
                        <div class="skill-name">HTML</div>
                        <div class="skill-bar">
                            <div class="skill-per" per="90%" style={{ 'maxWidth': '90%' }}></div>
                        </div>
                    </div>

                    <div class="skill">
                        <div class="skill-name">CSS</div>
                        <div class="skill-bar">
                            <div class="skill-per" per="70%" style={{ 'maxWidth': '70%' }}></div>
                        </div>
                    </div>

                    <div class="skill">
                        <div class="skill-name">Javascript</div>
                        <div class="skill-bar">
                            <div class="skill-per" per="60%" style={{ 'maxWidth': '60%' }}></div>
                        </div>
                    </div>
                </div>

                <div className='self-center	justify-self-center pt-20 lg:pt-0'>
                    <img width={200} src={skillBGI} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Skills;