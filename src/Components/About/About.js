import React ,{Link} from 'react';
import './About.css';
import profilePhoto from '../../assets/profile_photo.png';
import reactImage from '../../assets/react_image.png';
import jsImage from '../../assets/JS_image.png';
import cssImage from '../../assets/css_image.png';
import htmlImage from '../../assets/html _image.png';
import tailwindImage from '../../assets/tailwind_image.png';
const About = () => {
    const handleClick = () => {
        console.log('i am clicked');
        
      };
   return (
        <section className="">
            <div className="hero min-h-screen bg-cover bg-no-repeat bg-center border-2 border-red-500" style={{}}>
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
                            <button className="btn btn-primary uppercase text-white font-bold">contact me</button>
                            <button onClick={()=>{window.open("https://drive.google.com/file/d/1yhrsJpWfAiYCfTUExa0PBsTWI1kVD6QN/view?usp=sharing", "_blank")}} className="btn btn-error ml-4 uppercase text-white font-bold">resume</button>
                        </div>
                    </div>
                    <div className='w-full file:lg:w-1/2 justify-self-center rounded-lg shadow-3xl'>
                        <img width={400} src={profilePhoto} className="" alt='zaman profile pic' />
                    </div>
                </div>
            </div>
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