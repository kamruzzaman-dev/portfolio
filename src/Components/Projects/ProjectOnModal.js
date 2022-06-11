import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './projectOnModal.css';
import profilePhoto from '../../assets/profile_photo.png';

const ProjectOnModal = ({ showigDetailsProject, setShowigDetailsProject }) => {
    // console.log(showigDetailsProject);
    const { id, name, image1, image2, image3, image4, about } = showigDetailsProject;
    return (
        <>
            <input type="checkbox" id="ModalDeatilsShowingTigger" class="modal-toggle" />
            <div class="modal modal-bottom  sm:modal-middle">
                <div class="modal-area relative about-container border-2 border-red-400 card hero bg-slate-200" >
                    {/* modal content */}
                    <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className='card-header card-image '>
                            <img width={400} src={image1} className="" alt='zaman profile pic' />
                        </div>
                        <div className='w-full lg:w-1/2'>
                            <h1 class="text-3xl font-bold capitalize">{name}!</h1>
                            <p class="pt-4 text-md font-bold text-red-400">{about}</p>
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
                            <div className='flex justify-start my-4 lg:mt-0'>
                                <button className='btn btn-outline btn-error font-bold hover:text-white mx-4'>live site</button>
                                <button className='btn btn-outline btn-success font-bold text-white'>Code link</button>
                            </div>

                        </div>
                        
                    </div>



                    {/* modal closed button */}
                    <div class="modal-action fixed md:absolute z-10 right-0 bottom-0 p-4">
                        <label for="ModalDeatilsShowingTigger" class="btn">Close!</label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectOnModal;