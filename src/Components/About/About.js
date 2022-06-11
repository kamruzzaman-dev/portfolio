import React ,{Link} from 'react';
import './About.css';
import profilePhoto from '../../assets/profile_photo.png';
import reactImage from '../../assets/react_image.png';
import jsImage from '../../assets/JS_image.png';
import cssImage from '../../assets/css_image.png';
import htmlImage from '../../assets/html _image.png';
import tailwindImage from '../../assets/tailwind_image.png';
import Intro from '../Intro/Intro';
import Skills from '../Skills/Skills';
const About = () => {
    const handleClick = () => {
        console.log('i am clicked');
        
      };
   return (
        <section className="p-2 lg:p-10 bg-slate-200 card shadow-lg my-16 mx-4 lg:mx-10 about-container">
            <Intro/>
            <Skills/>
        </section>
    );
};

export default About;




/* 
            <div className='min-h-screen grid grid-cols-2 gap-4'>
                <div className='justify-self-center self-center	'>
                    <img width={400} src={profilePhoto} alt="" />
                </div>

                <div className='flex flex-col justify-start h-full'>
                    <div className='flex items-center mt-20 mr-20 p-10 border-2 bg-red-200 border-sky-300'>
                        <span className='text-5xl'>👋</span>
                        <div className=' text-right'>
                            <p className='text-xl'>Hello, I am</p>
                            <h1 className='text-5xl font-bold'>MD KAMRUZZAMAN</h1>
                        </div>
                    </div>
                    <span style={{ 'width': 'maxContent' }} className='my-10 p-6 border-2 border-sky-300 text-right mt-20 mr-20'>
                        <h1 className='text-xl'>JONIOR WEB DEVELOPER</h1>
                        <h1 className='text-xl'>LOOKING FOR JOBS</h1>
                    </span>
                    <div className=''>
                        <button class="btn btn-outline btn-error mr-5 font-bold">My Resume</button>
                        <button class="btn btn-outline  btn-primary font-bold">Contact Me</button>
                    </div>
                </div>
            </div>
                
*/