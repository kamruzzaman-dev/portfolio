import React from 'react';
import profilePhoto from '../../assets/profile_photo.png';
import reactImage from '../../assets/react_image.png';
import jsImage from '../../assets/JS_image.png';
import cssImage from '../../assets/css_image.png';
import htmlImage from '../../assets/html _image.png';
import tailwindImage from '../../assets/tailwind_image.png';
import bootstrapImage from '../../assets/bootstrap+image.png';
import mongodb from '../../assets/mongodb.png';
import { Link } from 'react-router-dom';
import './bannar.css';

const Bannar = () => {

    return (
        <section className="">
            <div className="hero min-h-screen bg-cover bg-no-repeat bg-center relative" style={{}}>
                <div className="hero-content flex-col lg:flex-row-reverse ">
                    <div className='absolute items-icon react-icon'>
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
                    </div>
                    <div className='w-full lg:w-1/2'>
                        <div className='flex items-center p-10 border-2 bg-red-200 border-slate-300'>
                            <span className='text-xl lg:text-5xl'>👋</span>
                            <div className=' text-right '>
                                <p className='text-sm lg:text-xl'>Hello, I am</p>
                                <h1 className='text-xl lg:text-5xl font-bold'>MD KAMRUZZAMAN</h1>
                            </div>
                        </div>
                        <div className='mt-5 p-6  text-right border-2 bg-red-200 border-slate-300'>
                            <h1 className='text-xl'>JONIOR WEB DEVELOPER</h1>
                            <h1 className='text-xl'>LOOKING FOR JOBS</h1>
                        </div>
                        <div className='mt-5'>
                            <Link to='/contact' className="btn btn-primary uppercase text-white font-bold">contact me</Link>
                            <button onClick={() => { window.open("https://docs.google.com/document/d/1YOyoVuLzRRuzm1DFas-bcdznrCgJqOqI/edit?usp=sharing&ouid=104086493026586641626&rtpof=true&sd=true", "_blank") }} className="btn btn-error ml-4 uppercase text-white font-bold">resume</button>
                        </div>
                    </div>
                    <div className='w-full mask mask-circle file:lg:w-1/2 justify-self-center rounded-lg shadow-3xl'>
                        <img width={400} src={profilePhoto} className="" alt='zaman profile pic' />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Bannar;