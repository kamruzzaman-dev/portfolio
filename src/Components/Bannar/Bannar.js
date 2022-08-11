import React from 'react';
import profilePhoto from '../../assets/zaman2.png';
import reactImage from '../../assets/react_image.png';
import jsImage from '../../assets/JS_image.png';
import cssImage from '../../assets/css_image.png';
import htmlImage from '../../assets/html _image.png';
import tailwindImage from '../../assets/tailwind_image.png';
import bootstrapImage from '../../assets/bootstrap+image.png';
import mongodb from '../../assets/mongodb.png';
import { Link } from 'react-router-dom';
import './bannar.css';
import { Typewriter, useTypewriter } from 'react-simple-typewriter'
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import Resume from '../Resume/Resume';

const Bannar = () => {
    const { text } = useTypewriter({
        words: [' Frontend Developer', ' MERN Developer'],
        loop: 0,
        onLoopDone: () => console.log(`loop completed after 3 runs.`),
    })
    return (
        <section className="max-w-7xl mx-auto">
            <div className="hero min-h-screen bg-cover bg-no-repeat bg-center relative" style={{}}>
                <div className="hero-content flex-col lg:flex-row-reverse ">
                    {/* <div className='absolute items-icon react-icon'>
                        <img src={reactImage} alt="" />
                    </div>
                    <div className='absolute items-icon js-icon'>
                        <img src={jsImage} alt="" />
                    </div>
                    <div className='absolute items-icon css-icon'>
                        <img src={cssImage} alt="" />
                    </div>
                    <div className='absolute items-icon html-icon'>
                        <img src={htmlImage} alt="" />
                    </div>
                    <div className='absolute items-icon tailwind-icon'>
                        <img src={tailwindImage} alt="" />
                    </div>
                    <div className='absolute items-icon bootstrap-icon'>
                        <img src={bootstrapImage} alt="" />
                    </div>
                    <div className='absolute items-icon mongodb-icon'>
                        <img src={mongodb} alt="" />
                    </div> */}
                    <div className='lg:w-full'>

                        <div className=''>
                            <h3>WELCOME TO MY WORLD</h3>
                            <h1>
                                Hi, I’m <span>MD KAMRUZZAMAN</span>
                            </h1>
                            <h2>
                                a
                                <span> <Typewriter
                                    words={[' Frontend Developer', ' MERN Developer']}
                                    loop={false}
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                    cursor
                                    cursorStyle='|'
                                />
                                </span>
                            </h2>

                            <p>I am looking for a position where I can have the opportunity to use my web development skills. My motive is to become an expert software engineer and contribute my work to many big projects. I am really passionate about technology and I like to learn about new technology.</p>

                            <div className='mt-5'>
                                <Link to='/contact' className="btn btn-primary font-bold">contact me</Link>
                                <button onClick={() => { window.open("https://docs.google.com/document/d/1d6iF5Wm8g2oLmTWpbzN579pGLyBBqSWZjGZgm7qxKn4/edit?usp=sharing", "_blank") }} className="btn btn-resume btn-outline ml-4 font-bold">resume</button>
                            </div>

                            <div className='hero_btn flex justify-between'>
                                <div className='col_1'>
                                    <h4>VISIT ME SOCIAL</h4>
                                    <div className='button'>
                                        <button onClick={() => { window.open("", "_blank") }} className='btn_shadow'>
                                            <i class='fab fa-facebook-f'></i>
                                        </button>
                                        <button onClick={() => { window.open("https://github.com/YeBenLing-ZAMAN", "_blank") }} className='btn_shadow'>
                                            <i class='fab fa-github'></i>
                                        </button>
                                        <button onClick={() => { window.open("https://www.linkedin.com/in/md-kamruzzaman-zaman-357b61170/", "_blank") }} className='btn_shadow'>
                                            <i class='fab fa-linkedin-in'></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='w-full file:lg:w-1/2 justify-self-center rounded-lg shadow-3xl'>
                        <img width={400} src={profilePhoto} className="" alt='zaman profile pic' />
                    </div>
                </div>
            </div>
            <Resume></Resume>
            <Skills></Skills>
            <Projects></Projects>
        </section>
    );
};

export default Bannar;