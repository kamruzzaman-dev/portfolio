import { type } from '@testing-library/user-event/dist/type';
import React from 'react';
import './project.css';

const Project = ({ project }) => {
    const forOpenModal = () => {
        console.log('data structure');
    }
    const { about, name, date, Type, image1 } = project;
    return (
        <div class="card bg-base-100 shadow-xl items-start px-4 pt-10 ">
            <figure class="card-header card-image">
                <img src={image1} alt={name} class="rounded-xl w-full" />
            </figure>
            <h1 className='px-2 my-1  rounded-md text-white bg-blue-600'>{Type}</h1>
            <div class="card-body">
                <h2 class="card-title text-center">{name}</h2>
                {/* <h1>{Type}</h1> */}
                <p>{about}</p>
                <p>{date}</p>
                <button onClick={forOpenModal} className='btn btn-error'>show more deatils</button>
            </div>
        </div>
    );
};

export default Project;