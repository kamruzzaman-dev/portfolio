import React from 'react';
import './MyService.css';

const MyServices = () => {
    return (
        <div>
            <div className='p-5'>
                <h4 className='text-center capitalize'>services I am feeling comfortable</h4>
                <h1 className='text-6xl text-center font-bold'>My Service</h1>
                <hr className='mt-5 bg-red-500 h-1' />
            </div>
            <h1 className='text-center'>deatils text hobe arki deatils text hobe arki deatils text hobe arki deatils text hobe arki deatils text hobe arki deatils text hobe arki deatils text hobe arki deatils text hobe arki deatils text hobe arki deatils text hobe arki deatils text hobe arki deatils text hobe arki deatils text hobe arki deatils text hobe arki</h1>

            <div className='my-10 grid grid-cols-1 lg:grid-cols-3 gap-4 '>
                <div class="card w-80 bg-base-100 shadow-xl justify-self-center">
                    <figure className='service-card-header service-card-image'>
                        <img src='https://source.unsplash.com/e_MdMMKrgdY' alt="Shoes" />
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title text-3xl font-bold justify-center mb-10">web development</h2>
                        <p className='text-md'>As a web developer, my objective is to make a positive impact on clients, co-workers, and the Internet using my skills and experience to develop compelling and dynamic websites.</p>
                    </div>
                </div>

                <div class="card w-80 bg-base-100 shadow-xl justify-self-center">
                    <figure className='service-card-header service-card-image'>
                        <img src='https://source.unsplash.com/i1raOXtOXGk' alt="Shoes" />
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title text-3xl font-bold justify-center mb-10">Fully Responsive</h2>
                        <p className='text-md'>At first I have been focused on the responsiveness of the website.A responsive website always better than a non-responsiveness website. So I always want to try my best to create a responsive website.</p>
                    </div>
                </div>

                <div class="card w-80 bg-base-100 shadow-xl justify-self-center">
                    <figure className='service-card-header service-card-image'>
                        <img src='https://source.unsplash.com/SQIpFNb0Nk4' alt="Shoes" />
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title text-3xl font-bold justify-center mb-10 whitespace-normal">Web Application development</h2>
                        <p className='text-md'>As a web developer, my objective is to make a positive impact on clients, co-workers, and the Internet using my skills and experience to develop compelling and dynamic websites.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MyServices;