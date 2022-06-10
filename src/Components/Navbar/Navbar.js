import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/zaman_logo-removebg-preview.png';
import ContactMe from '../ContactMe/ContactMe';
import Footer from '../Footer/Footer';

const Navbar = () => {
    const menuItems = <>
        <li className='my-1 mx-0 lg:my-0 lg:mx-2 '><NavLink to='/home'>Home</NavLink></li>
        <li className='my-1 mx-0 lg:my-0 lg:mx-2 '><NavLink to='/about'>About</NavLink></li>
        <li className='my-1 mx-0 lg:my-0 lg:mx-2 '><NavLink to='/project'>Project</NavLink></li>
        <li className='my-1 mx-0 lg:my-0 lg:mx-2 '><NavLink to='/skills'>Skills</NavLink></li>
        <li className='my-1 mx-0 lg:my-0 lg:mx-2 '><NavLink to='/contact'>Contact</NavLink></li>

    </>
    return (
        <div className="navbar bg-base-100 sticky top-0 z-10">
            <div className="navbar flex justify-between	">
                <Link to='/' className="btn btn-ghost">
                    <img width={70} src={logo} alt="" />
                </Link>
                <div className="dropdown dropdown-end">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
            </div>
            <div className="navbar-end hidden lg:flex w-lg">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;