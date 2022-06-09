import React from 'react';

const Project = ({ project }) => {
    const {about ,name,date,Type} = project; 
        return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img width={600} height={400} src="" alt={name} class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
                <h1>{Type}</h1>
                <p>{about}</p>
                <p>{date}</p>
            </div>
        </div>
    );
};

export default Project;