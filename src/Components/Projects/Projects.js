import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Project from './Project';

const Projects = () => {
    /* DATA STORE AND CALL  */
    const [loadingPage, setLoadingPage] = useState(false);
    const [searchType, setSearchType] = useState('all');
    const [projects, setProjects] = useState([]);
    const [showigListOfProject, setShowingListPfProject] = useState([]);
    useEffect(() => {
        setLoadingPage(true);
        fetch('projects.json')
            .then(res => res.json())
            .then(data => {
                setProjects(data);
                setShowingListPfProject(data);
                setLoadingPage(false);
            })
    }, [])

    if (loadingPage) {
        // loader add hobe
    }

    const showingProject = (target) => {
        setSearchType(target);
        const findList = projects.filter(project => project.Type === target);
        setShowingListPfProject(findList);
    }
    
    const allprojectShowing = ()=>{
        setShowingListPfProject(projects);
        setSearchType('all');
    }


    return (
        <div className='min-h-screen'>
            <p className='mt-20 text-xl text-center'>showcasing some of my my best work</p>
            <h1 className='mt-5 text-3xl font-bold text-center'>My <span className='text-red-500'>Portfolio</span></h1>

            {/* navbar section */}
            <div class="navbar bg-base-100">
                <div class="navbar-start">

                </div>
                <div class="navbar-center">
                    <ul class="menu lg:menu-horizontal menu-vertical p-0">
                        <li><p onClick={allprojectShowing} style={{ color: searchType === 'all' ? "tomato" : "black" }}>All</p></li>
                        <li><p onClick={() => { showingProject('html') }} style={{ color: searchType === 'html' ? "tomato" : "black" }}>HTML&CSS</p></li>
                        <li><a>DOM</a></li>
                        <li><a>font-end(frameWork)</a></li>
                        <li><p onClick={() => { showingProject('react') }} style={{ color: searchType === 'react' ? "tomato" : "black" }}>fontend(react)</p></li>
                        <li><a>Full-Stack</a></li>
                    </ul>
                </div>
                <div class="navbar-end">

                </div>
            </div>
            <div className='mt-14 p-8 border-2 border-red-300 mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16 gap-5'>
                    {
                        showigListOfProject.map(pro => <Project project={pro} key={pro.id}></Project>)
                    }
                </div>
            </div>

        </div >
    );
};

export default Projects;