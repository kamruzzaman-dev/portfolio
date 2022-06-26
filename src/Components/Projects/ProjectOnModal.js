import React, { useEffect, useState } from 'react';
import './projectOnModal.css';
import profilePhoto from '../../assets/profile_photo.png';


const ProjectOnModal = ({ showigDetailsProject, setShowigDetailsProject }) => {
    // console.log(showigDetailsProject);
    const { id, name, image1, image2, image3, image4, about, describe, technology, code_link, live_link } = showigDetailsProject;


    // const images = [
    //     image1,image2,image3
    // ];

    // let imgIndex = 0;
    // const imaElement = document.getElementById('silderImage');
    // setInterval(() => {
    //     if (imgIndex >= images.length) {
    //         imgIndex = 0;
    //     }
    //     const imgURL = images[imgIndex];
    //     console.log(imgURL);
    //     imaElement.setAttribute('src', imgURL);
    //     imgIndex++;
    // }, 1000)


    const buttons = document.querySelectorAll("[data-carousel-button]")

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            console.log('this is click');
            const offset = button.dataset.carouselButton === "next" ? 1 : -1
            const slides = button
                .closest("[data-carousel]")
                .querySelector("[data-slides]")

            const activeSlide = slides.querySelector("[data-active]")
            let newIndex = [...slides.children].indexOf(activeSlide) + offset
            if (newIndex < 0) newIndex = slides.children.length - 1
            if (newIndex >= slides.children.length) newIndex = 0

            slides.children[newIndex].dataset.active = true
            delete activeSlide.dataset.active
        })
    })



    return (
        <>
            <input type="checkbox" id="ModalDeatilsShowingTigger" class="modal-toggle" />
            <div class="modal modal-bottom  sm:modal-middle">
                <div class="modal-area relative about-container border-2 border-red-400 card hero bg-slate-200" >
                    {/* modal content */}

                    <div className='main-container-div'>
                        <div className="hero-content flex-col lg:flex-row-reverse ">

                            <div className='details-card-div details-card-image '>
                                <img id='silderImage' width={400} src={image1} className="" alt='zaman profile pic' />
                            </div>
                            {/* <section aria-label="Newest">
                                <div class="carousel" data-carousel>
                                <button class="carousel-button prev" data-carousel-button="prev">&#8656;</button>
                                    <button class="carousel-button next" data-carousel-button="next">&#8658;</button>
                                    <ul data-slides>
                                        <li class="slide Photos details-card-div details-card-image" data-active>
                                        <img src={image1} alt="Nature Image #1" />
                                        </li>
                                        <li class="slide Photos details-card-div details-card-image">
                                        <img src={image2} alt="Nature Image #2" />
                                        </li>
                                        <li class="slide Photos details-card-div details-card-image">
                                            <img src={image3} alt="Nature Image #3" />
                                        </li>
                                    </ul>
                                    </div>
                                </section> */}



                            <div className='w-full lg:w-1/2 '>
                                <h1 class="text-3xl font-bold capitalize">{name}!</h1>
                                <h1 class="text-2xl my-6 font-bold">Details Describe</h1>
                                <ul className='liPoint px-4 lg:px-0'>
                                    {
                                        describe.map(des => <li className='mt-1'>{des}</li>)
                                    }
                                </ul>
                                {/* <h1 class="text-2xl my-6 font-bold">Tools & Technology:</h1> */}
                                {/* <ul className='liPoint grid grid-cols-2 gap-x-4'>

                                    {
                                        technology.map(tech => <li className='mt-1'>{tech}</li>)
                                    }
                                </ul> */}

                                <div className='flex justify-start my-4 lg:mt-16'>
                                    <button onClick={() => { window.open(live_link, "_blank") }} className='btn btn-outline btn-error font-bold hover:text-white mr-4'>live site</button>
                                    <button onClick={() => { window.open(code_link, "_blank") }} className='btn btn-outline btn-success font-bold text-white'>Code link</button>
                                </div>

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