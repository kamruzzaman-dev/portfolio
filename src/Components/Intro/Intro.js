import React from 'react';
import profilePhoto from '../../assets/profile_photo.png';
import './intro.css';

const Intro = () => {
    return (
        <div>
            <div className='p-5'>
                <h4 className='text-center'>My intro</h4>
                <h1 className='text-6xl text-center font-bold'>About Me</h1>
                <hr className='my-5 bg-red-500 h-1' />
            </div>

            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='w-full lg:w-1/2'>
                    <h1 class="text-xl font-bold">Hello!</h1>
                    <h1 class="text-5xl font-bold">This is Md. Kamruzzaman!</h1>
                    <p class="py-6 text-xl font-bold text-red-400">I love to write code, it's my passoin and job. I am here to help you, I am her to develop your Web Application.</p>
                    <h1 class="text-3xl font-bold">Personal Informations</h1>
                    <div className='p-4 flex flex-col md:flex-row justify-between w-full'>
                        <div className=''>
                            <p>First Name: md</p>
                            <p>First Name: kamruzzaman</p>
                            <p>address: Brahamanbaria, Bangladesh</p>
                            <p>Age: 22 years</p>
                        </div>
                        <div className='mt-6 lg:mt-0'>
                            <p>E-Mail: kamruzzaman.md@hotmail.com</p>
                            <p>phone: +8801949016701</p>
                            <p>Linkedind: linkedin/.....</p>
                            <p>GitHub: ................</p>
                        </div>
                    </div>

                    <button className='btn btn-error font-bold text-white'>Resume</button>

                </div>
                <div className='w-full mask mask-circle file:lg:w-1/2 justify-self-center rounded-lg shadow-3xl profileImage-div'>
                    <img width={400} src={profilePhoto} className="" alt='zaman profile pic' />
                </div>
            </div>
        </div>
    );
};

export default Intro;