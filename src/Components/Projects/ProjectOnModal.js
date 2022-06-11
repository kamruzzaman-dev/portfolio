import React, { useEffect, useState } from 'react';
import './projectOnModal.css';
import profilePhoto from '../../assets/profile_photo.png';


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";


// import required modules
import { FreeMode, Pagination } from "swiper";

const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    console.log('this is clicked');
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


const ProjectOnModal = ({ showigDetailsProject, setShowigDetailsProject }) => {
    // console.log(showigDetailsProject);
    const { id, name, image1, image2, image3, image4, about } = showigDetailsProject;
    return (
        <>
            <input type="checkbox" id="ModalDeatilsShowingTigger" class="modal-toggle" />
            <div class="modal modal-bottom  sm:modal-middle">
                <div class="modal-area relative about-container border-2 border-red-400 card hero bg-slate-200" >
                    {/* modal content */}
                    <div className="hero-content flex-col lg:flex-row-reverse ">

                        {/* <div className='details-card-div details-card-image '>
                            <img width={400} src={image1} className="" alt='zaman profile pic' />
                        </div> */}

                        <section aria-label="Newest">
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
                        </section>



                        <div className='w-full lg:w-1/2 '>
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
                                    <p>Linkedin: linkedin/.....</p>
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