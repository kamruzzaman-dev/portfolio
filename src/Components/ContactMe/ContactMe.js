import React, { useEffect, useState } from 'react';
import contactBGI from '../../assets/undraw_term_sheet_re_ju7s.svg';
import Project from '../Projects/Project';
const ContactMe = () => {

    return (
        <div className='hero min-h-screen'>
            <div class="hero min-h-screen" style={{
                background: `url(${contactBGI})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed'
            }}>
                <div class="hero-overlay bg-opacity-80"></div>
                <div class="hero-content text-center text-neutral-content flex flex-col justify-center items-center py-20 px-3">
                    <div className=' mb-14'>
                        <h3 className='text-xl font-blod uppercase text-primary text-center'>Contact Me</h3>
                        <p className='text-5xl text-center'>Add Your Valueable Comment</p>
                    </div>
                    <div className='flex flex-col w-full'>
                        <input type="text" placeholder="Your Name" className="my-2 input input-bordered input-success w-full max-w-full" />
                        <input type="text" placeholder="Email Address" className="my-2 input input-bordered input-success w-full max-w-full" />
                        <input type="text" placeholder="Subject" className="my-2 input input-bordered input-success w-full max-w-full" />
                        <textarea className="my-2 textarea textarea-success" placeholder="Your Message"></textarea>
                        <button className='btn btn-error'>Submit</button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ContactMe;