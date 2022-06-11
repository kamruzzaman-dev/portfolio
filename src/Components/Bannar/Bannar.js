import React from 'react';
import profilePhoto from '../../assets/profile_photo.png';
import reactImage from '../../assets/react_image.png';
import jsImage from '../../assets/JS_image.png';
import cssImage from '../../assets/css_image.png';
import htmlImage from '../../assets/html _image.png';
import tailwindImage from '../../assets/tailwind_image.png';
import { Link } from 'react-router-dom';

const Bannar = () => {

    return (
        <section className="">
            <div className="hero min-h-screen bg-cover bg-no-repeat bg-center" style={{}}>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className='w-full lg:w-1/2'>
                        <div className='flex items-center p-10 border-2 bg-red-200 border-sky-300'>
                            <span className='text-xl lg:text-5xl'>👋</span>
                            <div className=' text-right'>
                                <p className='text-sm lg:text-xl'>Hello, I am</p>
                                <h1 className='text-xl lg:text-5xl font-bold'>MD KAMRUZZAMAN</h1>
                            </div>
                        </div>
                        <div className='mt-5 p-6 border-2 bg-red-200 border-sky-300 text-right'>
                            <h1 className='text-xl'>JONIOR WEB DEVELOPER</h1>
                            <h1 className='text-xl'>LOOKING FOR JOBS</h1>
                        </div>
                        <div className='mt-5'>
                            <Link to='/contact' className="btn btn-primary uppercase text-white font-bold">contact me</Link>
                            <button onClick={()=>{window.open("https://drive.google.com/file/d/1yhrsJpWfAiYCfTUExa0PBsTWI1kVD6QN/view?usp=sharing", "_blank")}} className="btn btn-error ml-4 uppercase text-white font-bold">resume</button>
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