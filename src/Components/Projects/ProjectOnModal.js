import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './projectOnModal.css';

const ProjectOnModal = ({ showigDetailsProject, setShowigDetailsProject }) => {
    // console.log(showigDetailsProject);
   const {id, name, image1,about} = showigDetailsProject;
    return (
        <>
            <input type="checkbox" id="ModalDeatilsShowingTigger" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-area relative hero bg-slate-200" >
                    <div class="hero-content flex-col lg:flex-row-reverse justify-center items-center">
                        <div class="text-center lg:text-left">
                            <h1 class="text-3xl font-bold">{name}</h1>
                            <p class="py-1">About:  {about}</p>
                            <p class="py-6">ID: {id}</p>


                        </div>
                        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 modal-card-area">
                            <div class="card w-96 bg-base-100 shadow-xl image-full">
                                <figure><img src={image1} alt={name} /></figure>
                            </div>
                        </div>
                    </div>
                    {/* modal closed button */}
                    <div class="modal-action absolute right-0 bottom-0 p-4">
                        <label for="ModalDeatilsShowingTigger" class="btn">Close!</label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectOnModal;