import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/zaman_logo-removebg-preview.png';
import Footer from '../Footer/Footer';

const Navbar = ({ children }) => {
    const menuItems = <>
        <li className='my-1 mx-0 lg:my-0 lg:mx-2 '><NavLink to='/home'>Home</NavLink></li>
        <li className='my-1 mx-0 lg:my-0 lg:mx-2 '><NavLink to='/about'>About</NavLink></li>
        <li className='my-1 mx-0 lg:my-0 lg:mx-2 '><NavLink to='/project'>Project</NavLink></li>
        <li className='my-1 mx-0 lg:my-0 lg:mx-2 '><NavLink to='/skills'>Skills</NavLink></li>
        <li className='my-1 mx-0 lg:my-0 lg:mx-2 '><NavLink to='/contact'>Contact</NavLink></li>

    </>
    return (
        <div className=''>
            <div class="drawer drawer-end">
                <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col">
                    {/* <!-- Navbar --> */}
                    <div class="w-full navbar bg-base-300 top-0 sticky z-10">
                        <div class="flex-1 px-2 mx-2">
                            <img className='p-2' width={100} src={logo} alt='logo' />
                        </div>

                        <div class="flex-none hidden lg:block">
                            <ul class="menu menu-horizontal">
                                {/* <!-- Navbar menu content here --> */}
                                {menuItems}
                            </ul>
                        </div>
                        <div class="flex-none lg:hidden">
                            <label for="my-drawer-3" class="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                    </div>
                    {/* <!-- Page content here --> */}
                    <div className='max-w-7xl mx-auto'>
                    {children}
                    </div>
                    <Footer />
                </div>
                <div class="drawer-side">
                    <label for="my-drawer-3" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
                        {/* <!-- Sidebar content here --> */}

                        {menuItems}

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Navbar;