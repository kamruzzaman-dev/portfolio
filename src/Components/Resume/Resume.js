import React from 'react';

const Resume = () => {
    return (
        <div className='mb-10'>
            <div className='p-5'>
                <h4 className='text-center'>Check out My Resume</h4>
                <h1 className='text-6xl text-center font-bold'>My Resume</h1>
                <hr className='my-5 bg-primary h-1' />
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-5'>
                <div>
                    <h1 className='text-3xl font-bold text-center mb-10'>Education</h1>
                    <div class="card w-96 bg-base-100 shadow-xl my-6 border-l-4 border-primary">
                        <div class="card-body">
                            <h2 class="card-title text-2xl">Bachelor Degree's</h2>
                            <div className=''>
                                <p className='mb-4 text-md font-bold whitespace-nowrap'>Hubei University Of Techology | 2019-2023</p>
                                <p>Currently I am running student BSC program in Software Engineerig.</p>
                            </div>
                        </div>
                    </div>
                    <div class="card w-96 bg-base-100 shadow-xl border-l-4 border-primary">
                        <div class="card-body">
                            <h2 class="card-title text-2xl">Higher Secondary Certificate</h2>
                            <div>
                                <p className='mb-4 text-md font-bold whitespace-nowrap'>Brahmanbaria Govt College | 2019-2023</p>
                                <p>I have been completed my HSC from brahmanbaria.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className='text-3xl font-bold text-center mb-10'>Professional Couser & Achievement</h1>
                    <div class="card w-96 bg-base-100 shadow-xl my-6 border-l-4 border-primary">
                        <div class="card-body">
                            <h2 class="card-title text-2xl">International Student Star</h2>
                            <div>
                                <p className='mb-4 text-md font-bold whitespace-nowrap'>HBUT | 2nd-year (2020-2021)</p>
                                <p>link</p>
                            </div>
                        </div>
                    </div>

                    <div class="card w-96 bg-base-100 shadow-xl my-6 border-l-4 border-primary">
                        <div class="card-body">
                            <h2 class="card-title text-2xl">Web development</h2>
                            <div>
                                <p className='mb-4 text-md font-bold whitespace-nowrap'>Programming Hero | Batch-5</p>
                                <p>successfull completed this course with Avg. 58.8/60 Marks</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;