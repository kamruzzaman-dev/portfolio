import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Project from './Project';
import ProjectOnModal from './ProjectOnModal';
import './projects.css';

const Projects = () => {
    /* DATA STORE AND CALL  */
    const [loadingPage, setLoadingPage] = useState(false);
    const [searchType, setSearchType] = useState('all');
    const [projects, setProjects] = useState([]);
    const [showigListOfProject, setShowingListPfProject] = useState([]);
    const [showigDetailsProject, setShowigDetailsProject] = useState(null);
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
        <div className='min-h-screen '>
            <p className='mt-10 text-xl text-center capitalize'>showcasing some of my best work</p>
            <h1 className='mt-5 text-3xl font-bold text-center'>My <span className='text-red-500'>Portfolio</span></h1>

            {/* navbar section */}
            <div class="flex items-center justify-center bg-base-100 px-4">
                <div class="">
                    <ul class="project-navber p-0">
                        <li><p onClick={allprojectShowing} style={{ color: searchType === 'all' ? "tomato" : "" }}>All</p></li>
                        <li><p onClick={() => { showingProject('html') }} style={{ color: searchType === 'html' ? "tomato" : "" }}>HTML&CSS</p></li>
                        <li><p onClick={() => { showingProject('dom') }} style={{ color: searchType === 'dom' ? "tomato" : "" }}>DOM</p></li>
                        <li><p onClick={() => { showingProject('react') }} style={{ color: searchType === 'react' ? "tomato" : "" }}>Front-end(FrameWork)</p></li>
                        <li><p onClick={() => { showingProject('frontEnd') }} style={{ color: searchType === 'frontEnd' ? "tomato" : "" }}>Front-end(react)</p></li>
                        <li><p onClick={() => { showingProject('fullStack') }} style={{ color: searchType === 'fullStack' ? "tomato" : "" }}>Full-Stack</p></li>
                    </ul>
                </div>
            </div>
            <div className='mt-1 py-0 px-8  mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16'>
                    {
                        showigListOfProject.map(pro => <Project project={pro} setShowigDetailsProject={setShowigDetailsProject} key={pro.id}></Project>)
                    }
                    {
                        showigDetailsProject && <ProjectOnModal
                        showigDetailsProject={showigDetailsProject}
                        setShowigDetailsProject={setShowigDetailsProject}
                        ></ProjectOnModal>
                    }
                </div>
            </div>

        </div >
    );
};

export default Projects;