import { hover } from '@testing-library/user-event/dist/hover';
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

    const allprojectShowing = () => {
        setShowingListPfProject(projects);
        setSearchType('all');
    }


    return (
        <div className='max-w-7xl mx-auto'>
            <div className='min-h-screen '>
                <div className='p-0'>
                    <h4 className='text-center'>showcasing some of my best work</h4>
                    <h1 className='mt-0 text-6xl  font-bold text-center'>My <span className='text-primary'>Portfolio</span></h1>
                    <hr className='mt-5 bg-primary h-1' />
                </div>
                {/* navbar section */}
                <div class="flex items-center mb-8 justify-center bg-base-100 px-4">
                    <div class="">
                        <ul class="project-navber p-0">
                            <li><p className='fromCenter' onClick={allprojectShowing} style={{ color: searchType === 'all' ? "#ff014f" : ""}}>All</p></li>
                            <li><p className='fromCenter' onClick={() => { showingProject('html') }} style={{ color: searchType === 'html' ? "#ff014f" : "" }}>HTML&CSS</p></li>
                            <li><p className='fromCenter' onClick={() => { showingProject('dom') }} style={{ color: searchType === 'dom' ? "#ff014f" : "" }}>DOM</p></li>
                            <li><p className='fromCenter' onClick={() => { showingProject('react') }} style={{ color: searchType === 'react' ? "#ff014f" : "" }}>Front-end(FrameWork)</p></li>
                            <li><p className='fromCenter' onClick={() => { showingProject('frontEnd') }} style={{ color: searchType === 'frontEnd' ? "#ff014f" : "" }}>Front-end(react)</p></li>
                            <li><p className='fromCenter' onClick={() => { showingProject('fullStack') }} style={{ color: searchType === 'fullStack' ? "#ff014f" : "" }}>Full-Stack</p></li>
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
        </div>
    );
};

export default Projects;